class Api::LikesController < ApplicationController
  def index
    @likes = Like.where(user_id: current_user.id)
  end

  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id

    if @like.save
    else
      render @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find_by(id: params[:id])

    if @like.user_id == current_user.id && @like.destroy
    else
      render "invalid user"
    end
  end

  private
  def like_params
    params.require(:like).permit(:post_id)
  end
end