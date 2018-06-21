class PostsController < ApplicationController
	
	def index
		@posts = Post.all
		render json:@posts
	end

	def new

	end

	def create
		#render plain: params[:post].inspect
		@post = Post.new post_params
		@post.save

		redirect_to @post

	end

	def show
		@post = Post.find params[:id]
	end

	def post_params
		params.require(:post).permit(:title,:content,:image)
	end
end
