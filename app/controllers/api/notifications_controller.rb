class Api::NotificationsController < ApplicationController
  def index
    @notifications = User.find(params[:user_id]).notifications
  end

  def create
    @notification = Notification.new(notification_params)

    if @notification.save
      render :show
    else
      render json: @notification.errors.full_messages
    end
  end

  def destroy
    @notification = Notification.find(params[:id])

    @notification.destroy
    render :show
  end

  private #pirate

  def notification_params
    params.require(:notification).permit(:user_id, :message)
  end

end
