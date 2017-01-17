class Api::TeamsController < ApplicationController
  def show
    @team = Team.find_by_id(params[:id])
  end

  def index
    @teams = current_user.teams
  end

  def create
    @team = Team.new(name: team_params[:name], leader: current_user)

    if @team.save
      Membership.create(user: current_user, team: @team)
      render :show
    else
      render json: ["Oops, we didn't save your team!"]
    end
  end

  def update
    @team = Team.find_by_id(params[:id])

    if @team.update(team_params)
      render :show
    else
      render json: ["Oops, we didn't save your changes!"]
    end
  end

  private

  def team_params
    params.require(:team).permit(:name, :leader_id, :members)
  end
end
