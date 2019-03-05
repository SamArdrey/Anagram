class Api::PostsController < ApplicationController
  def index
    if params[:user_id] == "undefined"
      params[:user_id] = current_user.id
    end
    # debugger
    @posts = Post.with_attached_photo.where(author_id: params[:user_id])
  end

  def show
    @post = Post.with_attached_photo.find(params[:id])
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render "api/posts/#{@post.id}"
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  private
  def post_params
    params.require(:post).permit(:author_id, :body_text)
  end
end