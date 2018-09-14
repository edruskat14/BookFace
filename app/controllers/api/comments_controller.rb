class Api::CommentsController < ApplicationController
  def index
    @comments = Post.find(params[:post_id]).comments
  end

  def create
    @comment = Comment.new(post_params)

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end


  def post_params
    params.require(:comment).permit(:body, :commenter_id, :post_id)
  end
end
