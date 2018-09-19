class Post < ApplicationRecord
  validates :body, length: { minimum: 1 }

  has_many :comments,
  foreign_key: :post_id,
  class_name: :Comment

  belongs_to :poster,
  foreign_key: :poster_id,
  class_name: :User

  belongs_to :wall,
  foreign_key: :wall_id,
  class_name: :User

  has_many :likes,
  foreign_key: :post_id,
  class_name: :PostLike
end
