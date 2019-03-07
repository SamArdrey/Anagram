class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.where(post_id: params[:post_id])
  end

  def show
    @comment = Comment.find_by(id: params[:id])
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id

    if @comment.save
      render :show
    else
      render @comment.errors.full_messages, status: 422
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:post_id, :parent_id, :body)
  end
end