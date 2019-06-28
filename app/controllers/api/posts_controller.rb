class Api::PostsController < ApplicationController
  def index
    if params[:user_id] == "undefined"
      params[:user_id] = current_user.id
    end
    @posts = Post.with_attached_photo.where(author_id: params[:user_id])
  end

  def all
    @comments = Comment.all
    @posts = Post.with_attached_photo.all
  end

  def show
    @post = Post.with_attached_photo.find_by(id: params[:id])
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  private
  def post_params
    params.require(:post).permit(:author_id, :body_text, :photo)
  end
end