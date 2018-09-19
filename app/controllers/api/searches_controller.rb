class Api::SearchesController < ApplicationController
  def index
    @users = User.where("username LIKE '%#{params[:string]}%'")
  end
end
