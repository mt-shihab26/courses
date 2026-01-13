class DashboardController < ApplicationController
  layout "dashboard"

  def index
    flash[:notice] = "Hello World"
    flash[:alert] = "Hello World"
  end

  def about
  end
end
