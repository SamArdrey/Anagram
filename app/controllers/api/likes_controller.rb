class Api::LikesController < ApplicationController
  def index
    @likes = Like.where(:user_id current_user.id)
  end

  def create
    @like = Like.new(like_params)

    if @like.save
      render :index
    else
      render @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find(:id params[:id])

    if @like.user_id == current_user.id && @like.destroy
      render :index
    else
      render "invalid user"
    end
  end

  private
  def like_params
    params.require(:like).permit(:id, :user_id, :post_id)
  end
end