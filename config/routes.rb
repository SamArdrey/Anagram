Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json } do
    resources :users, only: [:create, :show] do
      resources :posts, only: [:index]
    end
    resources :users, only: [:index]

    resource :session, only: [:create, :destroy, :show]

    get "posts/all", to: "posts#all"
    resources :posts, only: [:create, :new]
    resources :posts, only: [:show] do
      resources :comments, only: [:index]
    end

    get "comments/all", to: "comments#all"
    resources :comments, only: [:show, :create]
  end

  root "static_pages#root"
end
