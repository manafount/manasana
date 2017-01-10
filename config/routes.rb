Rails.application.routes.draw do
  namespace :api do
    get 'sessions/create'
  end

  namespace :api do
    get 'sessions/destroy'
  end

  namespace :api do
    get 'users/create'
  end

  root "static_pages#root"
end
