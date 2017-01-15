class Api::TeamsController < ApplicationController
  def show
    @team = Team.find_by_id(params[:id])
    render json: @team
  end

  def index
    @teams = current_user.teams
    render json: @teams
  end

  def create
    @team = Team.new(name: team_params[:name], leader: current_user)

    if @team.save
      render json: @team
    else
      render json: ["Oops, we didn't save your team!"]
    end
  end

  def update
    @team = Team.find_by_id(params[:id])

    if @team.update(team_params)
      render json: @team
    else
      render json: ["Oops, we didn't save your changes!"]
    end
  end

  private

  def team_params
    params.require(:team).permit(:name, :leader_id, :members)
  end
end
