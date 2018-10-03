class User < ApplicationRecord
  validates :username, :session_token, :password_digest, presence: true
  validates :username, :session_token, uniqueness: true
  validates :username, length: { minimum: 2, maximum: 21 }
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

  attr_reader :password

  has_one :profile,
  foreign_key: :user_id,
  class_name: :Profile

  has_many :posts_made,
  foreign_key: :poster_id,
  class_name: :Post

  has_many :wall_posts,
  foreign_key: :wall_id,
  class_name: :Post

  has_many :comments_made,
  foreign_key: :commenter_id,
  class_name: :Comment

  has_many :friend_requests,
  foreign_key: :friendee_id,
  class_name: :Friendship

  has_many :friends_requested,
  foreign_key: :friender_id,
  class_name: :Friendship

  has_many :notifications,
  foreign_key: :user_id,
  class_name: :Notification

  has_many :posts_liked,
  foreign_key: :liker_id,
  class_name: :PostLike

  has_one_attached :photo

  def self.find_by_credentials(un, pw)
    user = User.find_by(username: un)
    if user && user.is_password?(pw)
      return user
    else
      return nil
    end
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def friendships
    Friendship.where(friender_id: self.id).or(Friendship.where(friendee_id: self.id))
  end

  def pending_friendships
    self.friendships.where(status: 'pending')
  end
  # def pending_friend_requests
  #   all_pending = [];
  #   self.friendships.each do |ship|
  #     if ship.status == 'pending'
  #       requestor_id = get_friend_id_from_friendship(ship)
  #       requestor = User.find(requestor_id)
  #       all_pending << requestor
  #     end
  #   end
  #   all_pending
  # end

  def friends
    all_friends = [];
    self.friendships.each do |ship|
      if ship.status == 'approved'
        friend_id = get_friend_id_from_friendship(ship)
        friend = User.find(friend_id)
        all_friends << friend
      end
    end
    all_friends
  end

  private #pirate

  def get_friend_id_from_friendship(ship)
    if ship.friender_id == self.id
      return ship.friendee_id
    else
      return ship.friender_id
    end
  end

end
