class Api::PostsController < ApplicationController

  def index
    if params[:feed] == 'false'
      @posts = User.find(params[:user_id]).wall_posts
    elsif params[:feed] == 'true'

    end
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 404
    end
  end

  private #pirate

  def post_params
    params.require(:post).permit(:body, :poster_id, :wall_id)
  end
end
