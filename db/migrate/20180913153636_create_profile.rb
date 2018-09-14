class CreateProfile < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.integer :user_id
      t.string :location
      t.string :catch_phrase
      t.boolean :milk_cereal
      t.string :favorite_thing
    end
  end
end
