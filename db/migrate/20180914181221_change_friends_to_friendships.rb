class ChangeFriendsToFriendships < ActiveRecord::Migration[5.2]
  def change
    rename_table :friends, :friendships
  end
end
