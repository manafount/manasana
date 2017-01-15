Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :teams, only: [:create, :update, :index, :show] do
      resources :projects, only: [:index, :create]
      resources :tasks, only: [:index, :create, :destroy]
    end
    resources :tasks, only: [:update, :destroy, :show] do
      resources :comments, only: [:index, :create]
    end
  end

  root "static_pages#root"
end
