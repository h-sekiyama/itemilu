Rails.application.routes.draw do
  resources :users
  root 'home#top'
  get '/home/top' => 'home#top'
end
