Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index] do
      resource :profile, only: [:create, :show, :update]
      resources :posts, only: [:index, :create]
      resources :friendships, only: [:index, :destroy]
    end
    resource :session, only: [:create, :destroy]
    resources :friendships, only: [:update, :create]
    # resources :profiles, only: [:index]
    resources :posts, only: [:update, :destroy, :show] do
      resources :comments, only: [:create]
    end
    resources :comments, only: [:update, :destroy]
  end
end
