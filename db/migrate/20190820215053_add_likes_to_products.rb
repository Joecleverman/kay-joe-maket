class AddLikesToProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :likes, :integer
  end
end
