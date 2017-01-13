class Api::TeamsController < ApplicationController
  def show
    @team = Team.find_by_id(:id)
    render "api/teams/show"
  end

  def create
    @team = Team.new(team_params)

    if @team.save
      render "api/teams/show"
    else
      render json: @team.errors.full_messages, status: 422
    end
  end

  def update
  end

  private

  def team_params
    params.require(:team).permit(:name, :leader_id)
  end
end
