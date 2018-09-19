class PostLike < ApplicationRecord
  validates :liker_id, :post_id, presence: true

  belongs_to :post,
  foreign_key: :post_id,
  class_name: :Post
end
