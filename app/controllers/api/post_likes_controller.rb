class Api::PostLikesController < ApplicationController
  def index
  end

  def create
    @post_like = PostLike.new(post_like_params)

    if @post_like.save
      render :show
    else
      render json: @post_like.errors.full_messages, status: 401
    end
  end

  def destroy
    @post_like = PostLike.find(params[:id])
    @post_like.destroy
    render :show
  end


  private #pirate

  def post_like_params
    params.require(:post_like).permit(:liker_id, :post_id)
  end

end
