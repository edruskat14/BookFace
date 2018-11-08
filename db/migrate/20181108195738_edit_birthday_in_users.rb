class EditBirthdayInUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :day, :string
    add_column :users, :month, :string
    add_column :users, :year, :string
    remove_column :users, :birthday, :string
  end
end
