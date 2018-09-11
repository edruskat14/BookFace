class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login(@user)
      #render json: api/feed TODO not made yet
    else
      render json: @user.errors, status: 401
    end
  end

  def destroy
    if current_user
      logout
      # render '/' TODO not made yet
    else
      render json: ['No one logged in'], status: 404
    end
  end

end
