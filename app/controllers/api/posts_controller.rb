class Api::PostsController < ApplicationController

  def index
    @posts = User.find(params[:user_id]).wall_posts
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render :index
    else
      render json: @post.errors, status: 404
    end
  end

  private #pirate

  def post_params
    params.require(:post).permit(:body, :poster_id, :wall_id)
  end 
end
