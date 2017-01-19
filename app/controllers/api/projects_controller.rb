class Api::ProjectsController < ApplicationController
  def index
    @projects = current_user.projects
  end

  def show
    @project = Project.find_by(params[:id])
  end

  def create
    @project = Project.new(project_params)
    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def update
    @project = Project.find_by(params[:id])
    if @project.update(project_params)
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def destroy
    @project = Project.find_by(params[:id])
    if @project.contributors.include?(@user)
      @project.destroy
      render :index
    else
      render(
        json: ["Unable to delete project"],
        status: 422
      )
    end
  end

  private

  def project_params
    params.require(:project).permit(:name, :description, :tasks, :team_id)
  end
end
