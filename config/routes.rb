Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index, :update] do
      resource :profile, only: [:create, :show, :update]
      resources :posts, only: [:index, :create]
      resources :friendships, only: [:index]
      resources :notifications, only: [:index, :create]
    end
    resources :posts, only: [:update, :destroy, :show] do
      resources :comments, only: [:create]
      resources :post_likes, only: [:create]
    end
    resource :session, only: [:create, :destroy]
    resources :friendships, only: [:update, :create, :destroy]
    resources :comments, only: [:update, :index, :destroy]
    resources :notifications, only: [:destroy]
    resources :post_likes, only: [:destroy]
    resources :searches, only: [:index]
    # resources :profiles, only: [:index]
  end
end
