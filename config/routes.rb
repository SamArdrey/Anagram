Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json } do
    resources :users, only: [:create, :show] do
      resources :posts, only: [:index]
    end

    resource :session, only: [:create, :destroy, :show]

    resources :posts, only: [:create, :new]
    resources :posts, only: [:show] do
      resources :comments, only: [:index]
    end

    resources :comments, only: [:show, :create]
  end

  root "static_pages#root"
end
