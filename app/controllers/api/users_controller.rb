class Api::UsersController < ApplicationController

  def index
    user = User.find_by(id: params[:id])
    if user
      @users = User.find(params[:id]).friends
    else
      @users = User.all
    end
  end

  def create
    @user = User.new(user_params)

    if @user.save
      @profile = Profile.new({user_id: @user.id})
      @profile.save
      login(@user)
      render :show
    else
      render json: @user.errors, status: 401
    end
  end

  def show
    @user = User.find(params[:id])
  end



  private #pirate

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
