class SessionsController < ApplicationController
	def create
		email = params[:email]
		user = User.find_by(email: email)

		if user.valid_password? params[:password]
			render json: user, status: :ok
		else
			render json: { error: 'asfasdf' }, status: 404
		end
	end
end