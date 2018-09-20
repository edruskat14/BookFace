class Api::FriendshipsController < ApplicationController
  def index
    @friendships = User.find(params[:user_id]).pending_friendships
    @friendships ||= [];
  end

  def create
    @friendship = Friendship.new(friendship_params)

    if @friendship.save
      @friender = User.find(@friendship.friender_id)
      render :show
    else
      render json: @friendship.errors.full_messages, status: 401
    end
  end

  def update
    @friendship = Friendship.find(params[:id])
    if @friendship
      @friendship.update(status: 'approved')
      render :show
    else
      render json: ['No existing request']
    end
  end

  def destroy
    @friendship = Friendship.find(params[:id])

    if @friendship
      @friendship.destroy
      render :show
    else
      render json: ["You two don't know each other"]
    end
  end

  private #pirate

  def friendship_params
    params.require(:friendship).permit(:friender_id, :friendee_id)
  end
end
