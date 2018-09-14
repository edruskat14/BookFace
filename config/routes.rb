Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index] do
      resource :profile, only: [:create, :show, :update]
      resources :posts, only: [:index, :create] 
      resources :comments, only: [:create]
    end
    resource :session, only: [:create, :destroy]
    # resources :profiles, only: [:index]
    resources :posts, only: [:update, :destroy]
    resources :comments, only: [:update, :destroy]
  end
end
