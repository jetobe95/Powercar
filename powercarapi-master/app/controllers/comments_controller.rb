class CommentsController < ApplicationController
	def index
		post = Post.find(params[:post_id])
		render json: { data: post.comments }
	end

	def index_posts
		post = Post.find(params[:post_id])
		render json: { data: post.comments }
	end

	#def new

	#end

	def create
		#render plain: params[	:post].inspect
		@comment = Comment.new comment_params
		if @comment.save
			render json: @comment
		else
			render json: @comment.errors, status: 400
		end
	end

	def show
		@comments = Comment.find params[:id]
		render json:@comments
	end

	def comment_params
		params.require(:comment).permit(:post_id, :user_id,:content)
	end
end
