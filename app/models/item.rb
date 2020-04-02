class Item < ApplicationRecord
  has_many :favorites
  has_many :comments
  has_many :item_images
  belongs_to :user
end
