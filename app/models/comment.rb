class Comment < ApplicationRecord
  belongs_to :product
  validates :content, presence: true
  validates :commenter, presence: true
  validates :product_id, presence: true
end
