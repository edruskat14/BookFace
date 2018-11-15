class AddDefaultsToProfile < ActiveRecord::Migration[5.2]
  def change
    change_column_default :profiles, :location, ''
    change_column_default :profiles, :favorite_thing, ''
    change_column_default :profiles, :catch_phrase, ''
    add_column :profiles, :occupation, :string, default: ''
    add_column :profiles, :favorite_speed_limit, :integer
  end
end
