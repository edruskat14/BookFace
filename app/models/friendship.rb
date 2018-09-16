class Friendship < ApplicationRecord
  validates :friender_id, uniqueness: { scope: :friendee_id, message: ['Already Friends'] }
  validate :cant_friend_self, on: :create

  def cant_friend_self
    if friender_id == friendee_id
      errors.add(:friender_id, 'Cannot friend self')
    end
  end


end
