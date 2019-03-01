Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json } do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :posts, only: [:show, :index, :create, :new]
  end

  root "static_pages#root"
end
