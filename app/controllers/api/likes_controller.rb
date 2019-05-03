class Api::LikesController < ApplicationController
  def index
    @likes = Like.where(:post_id params[:post_id])
  end

  def create
    @like = Like.new(like_params)

    if @like.save
      render :show
    else
      render @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find(:id params[id])
  end

  private
  def like_params
    params.require(:like).permit(:id, :user_id, :post_id)
  end
end