Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :projects, only: [:index, :create, :show, :update, :destroy] do
      resources :tasks, only: [:index, :create, :destroy]
    end
    resources :teams, only: [:create, :update, :index, :show]
    resources :tasks, only: [:update, :destroy, :show]
  end

  root "static_pages#root"
end
