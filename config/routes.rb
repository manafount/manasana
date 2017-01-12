Rails.application.routes.draw do

  namespace :api do
    get 'teams/show'
  end

  namespace :api do
    get 'teams/create'
  end

  namespace :api do
    get 'teams/update'
  end

  namespace :api do
    get 'projects/index'
  end

  namespace :api do
    get 'projects/show'
  end

  namespace :api do
    get 'projects/create'
  end

  namespace :api do
    get 'projects/update'
  end

  namespace :api do
    get 'projects/destroy'
  end

  namespace :api do
    get 'tasks/index'
  end

  namespace :api do
    get 'tasks/show'
  end

  namespace :api do
    get 'tasks/create'
  end

  namespace :api do
    get 'tasks/update'
  end

  namespace :api do
    get 'tasks/destroy'
  end

  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#root"
end
