class Post < ApplicationRecord
  has_many :comments,
  foreign_key: :post_id,
  class_name: :Comment

  belongs_to :poster,
  foreign_key: :poster_id,
  class_name: :User

  belongs_to :wall,
  foreign_key: :wall_id,
  class_name: :User

end
