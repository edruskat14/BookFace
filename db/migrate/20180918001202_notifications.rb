class Notifications < ActiveRecord::Migration[5.2]
  def change
    create_table :notifications do |t|
      t.integer :user_id, null: false
      t.string :message, null: false
      t.string :seen, default: false
    end
  end
end
