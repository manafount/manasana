class Api::ProjectsController < ApplicationController
  def index
    @projects = current_user.projects
    render 'api/projects/index'
  end

  def show
    @project = Project.find_by(params[:id])
    render 'api/projects/show'
  end

  def create
    @project = Project.new(project_params)
    if @project.save
      render 'api/projects/show'
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def update
    @project = Project.find_by(params[:id])
    if @project.update(project_params)
      render 'api/projects/show'
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def destroy
    @project = Project.find_by(params[:id])
    if @project.contributors.include?(@user)
      @project.destroy
      render "api/projects/index"
    else
      render(
        json: ["Unable to delete project"],
        status: 422
      )
    end
  end

  private

  def project_params
    params.require(:project).permit(:name, :description, :tasks, :team)
  end
end
