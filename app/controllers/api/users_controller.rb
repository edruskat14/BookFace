class Api::UsersController < ApplicationController

  def index
    @users = User.all
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
