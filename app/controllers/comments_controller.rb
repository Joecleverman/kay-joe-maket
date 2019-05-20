class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]
  before_action :set_product, only: [:index, :create]

  def index
    @comments = @product.comments
    render json: @comments
  end

  def show
    render json: @comment
  end

  def new
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render json: @comment
    # else
      # figure out how to handle errors
    end
  end

  def edit
  end

  def update
    @comment = Comment.new(comment_params)
    if @comment.update
      render json: @comment
    # else
      # figure out how to handle errors
    end
  end

  def destroy
    @comment.destroy
  end

  private
    def comment_params
      params.require(:comment).permit(:content, :commenter, :product_id)
    end

    def set_comment
      @comment = Comment.find(params[:id])
    end

    def set_product
      @product = Product.find_by(id: params[:product_id])
    end
end
