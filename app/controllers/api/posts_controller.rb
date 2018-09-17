class Api::PostsController < ApplicationController

  def index
    if params[:feed] == 'false'
      @posts = User.find(params[:user_id]).wall_posts
    else #if params[:feed] == 'true'
      friends = User.find(params[:user_id]).friends
      @posts = [];
      @posts += User.find(params[:user_id]).posts_made
      friends.each do |friend|
        @posts += friend.posts_made
      end
    end
    @comments = {};
    @posts.each do |post|
      @comments[post.id] = post.comments # {post.id => post.comments }
    end
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 401
    end
  end

  private #pirate

  def post_params
    params.require(:post).permit(:body, :poster_id, :wall_id)
  end
end
