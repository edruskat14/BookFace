class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.where(post_id: params[:post_id])
  end

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end
  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render :show
  end

  def comment_params
    params.require(:comment).permit(:body, :commenter_id, :post_id)
  end
end
