class Comment < ApplicationRecord
  belongs_to :post,
  foreign_key: :post_id,
  class_name: :Post

  belongs_to :commenter,
  foreign_key: :commenter_id,
  class_name: :User
  
end
