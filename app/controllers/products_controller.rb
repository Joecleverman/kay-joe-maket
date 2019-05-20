class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :update, :destroy]

  def index
    @products = Product.all
    render json: @products
  end

  def show
    render json: @product
  end

  def new
    @product = Product.new
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      render json: @product
    end
  end

  def update
    if @product.update(product_params)
      render json: @product
    end
  end

  def destroy
    @product.destroy
  end

  private
    def product_params
      params.require(:product).permit(:name, :description, :price_range, :category, :image, :likes)
    end

    def set_product
      @product = Product.find(params[:id])
    end
end
