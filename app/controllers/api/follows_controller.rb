class Api::FollowsController < ApplicationController
  def index
    @follows = Follow.where(follower_id: current_user.id)
  end

  def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id

    if @follow.save
    else
      render @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.find_by(id: params[:id])

    if @follow.follower_id == current_user.id && @follow.destroy
    else
      render "invalid user"
    end
  end

  private
  def follow_params
    params.require(:follow).permit(:followed_user_id)
  end
end
