class HomeController < ApplicationController
  def top
    @event = Event.all
    respond_to do |format|
      format.html
      format.json { render json: @event }
    end
  end
end
