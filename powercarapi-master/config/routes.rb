Rails.application.routes.draw do
  root to: "home#index"
  resources :posts
  resources :comments do
  	collection do
  	  get '/:post_id', to: 'comments#index_posts'
  	end
  end
  devise_for :users

  post '/login', to: 'sessions#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
