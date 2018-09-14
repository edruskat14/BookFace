class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :commenter_id, null: false
      t.integer :post_id, null: false
      t.text :body, null: false
      t.integer :response_id
    end
  end
end
