class Api::TasksController < ApplicationController
  def index
    @tasks = current_user.tasks
  end

  def show
    @task = Task.find_by(params[:id])
  end

  def create
    @task = Task.new(task_params)
    if @task.save
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def update
    @task = Task.find_by_id(params[:id])
    if @task.update(task_params)
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def destroy
    @task = Task.find_by_id(params[:id])
    if @task.contributors.include?(current_user)
      @task.destroy
      render :show
    else
      render(
        json: ["Unable to delete task"],
        status: 422
      )
    end
  end

  private

  def task_params
    params.require(:task).permit(:name, :description, :due, :completed, :author_id, :assignee_id, :project_id)
  end
end
