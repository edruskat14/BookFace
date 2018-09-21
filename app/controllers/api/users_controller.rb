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
    defaultProPic = File.open('app/assets/images/user_show/bookface-jim.png')
    @user.photo.attach(io: defaultProPic, filename: 'bookface-jim.png')
    if @user.save
      # @profile = Profile.new({user_id: @user.id})
      # @profile.save
      login(@user)
      render :show
    else
      render json: @user.errors, status: 401
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render :show
    else
      render json: ['Un updatable entity']
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end



  private #pirate

  def user_params
    params.require(:user).permit(:username, :password, :photo)
  end
end
