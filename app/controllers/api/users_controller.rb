class Api::UsersController < ApplicationController

  def index
    @teammates = current_user.teammates
    render 'api/users/index'
  end

  def show
    @user = User.find_by_id(params[:id])
    render 'api/users/show'
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end

end
