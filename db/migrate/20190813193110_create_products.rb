class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.string :description
      t.string :price_range
      t.string :category
      t.string :image
    end
  end
end
