json.extract! @user, :id, :username, :firstname, :lastname, :gender, :month, :day, :year
json.photoUrl url_for(@user.photo)
