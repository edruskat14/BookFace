class CreatePostLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :post_likes do |t|
      t.integer :post_id, null: false
      t.integer :liker_id, null: false
    end
  end
end
