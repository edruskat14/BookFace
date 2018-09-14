class CreateFriends < ActiveRecord::Migration[5.2]
  def change
    create_table :friends do |t|
      t.integer :friender_id, null: false
      t.integer :friendee_id, null: false
      t.string :status, default: 'pending'
    end
  end
end
