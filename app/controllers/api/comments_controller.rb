class Api::CommentsController < ApplicationController
  def index
    @comments = Post.find
  end
end
