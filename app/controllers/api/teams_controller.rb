class Api::TeamsController < ApplicationController
  def show
  end

  def create
  end

  def update
  end

  private

  def team_params
    params.require(:team).permit(:email, :password)
  end
end
