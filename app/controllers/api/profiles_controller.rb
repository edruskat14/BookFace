class Api::ProfilesController < ApplicationController

  def index
    @profiles = Profile.all
  end

  def create(user_id)
    @profile = Profile.new(profile_params)
    @profile.save
  end

  def show
    @profile = Profile.find_by(user_id: params[:user_id])
  end

  def update
    @profile = Profile.find_by(id: params[:id])

    if @profile
      @profile.update(profile_params)
      render json: :show
    else
      render json: ['Not a real profile'], status: 401
    end
  end



  private #pirate

  def profile_params
    params.require(:profile).permit(:user_id, :location, :catch_phrase, :milk_cereal, :favorite_thing)
  end

end
