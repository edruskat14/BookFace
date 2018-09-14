class AddInfoColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :firstname, :string
    add_column :users, :lastname, :string 
    add_column :users, :birthday, :date
  end
end
