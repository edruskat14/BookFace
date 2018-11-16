# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
Friendship.destroy_all
Profile.destroy_all

defaultProPic = File.open('app/assets/images/user_show/bookface-jim.png')
demo = User.create({ firstname: 'Demon', lastname: 'Strate', username: 'DemoUser', password: 'password', gender: 'female', day: '5', month: 'Jul', year: '1990' })
demo.photo.attach(io: defaultProPic, filename: 'bookface-jim.png')

defaultProPic = File.open('app/assets/images/user_show/bookface-jim.png')
trundle = User.create({ firstname: 'Trundle', lastname: 'Kelly', username: 'TrundleTheGreat', password: 'paddyspub', gender: 'male', day: '10', month: 'Mar', year: '1987' })
trundle.photo.attach(io: defaultProPic, filename: 'bookface-jim.png')

defaultProPic = File.open('app/assets/images/user_show/bookface-jim.png')
tes = User.create({ firstname: 'test', lastname: 'account', gender: 'female', username: 'test', password: 'password', day: '18', month: 'Nov', year: '1978' })
tes.photo.attach(io: defaultProPic, filename: 'bookface-jim.png')

defaultProPic = File.open('app/assets/images/user_show/bookface-jim.png')
lomez = User.create({ firstname: 'Lomez', lastname: '', username: 'Lomez', password: 'heybuddy', gender: 'male', day: '1', month: 'Jan', year: '1960' })
lomez.photo.attach(io: defaultProPic, filename: 'bookface-jim.png')

defaultProPic = File.open('app/assets/images/user_show/bookface-jim.png')
scarn = User.create({ firstname: 'Michael', lastname: 'Scarn', username: 'MichaelScarn', password: 'aisle5', gender: 'male', day: '13', month: 'Feb', year: '1974' })
scarn.photo.attach(io: defaultProPic, filename: 'bookface-jim.png')

defaultProPic = File.open('app/assets/images/user_show/bookface-jim.png')
choc = User.create({ firstname: 'Chocolate', lastname: '', username: 'chocolate', password: 'password', gender: 'female', day: '1', month: 'Jan', year: '1999' })
choc.photo.attach(io: defaultProPic, filename: 'bookface-jim.png')

defaultProPic = File.open('app/assets/images/user_show/bookface-jim.png')
kman = User.create({ firstname: 'Kramer', lastname: '', username: 'theKman', password: 'heybuddy', gender: 'male', day: '9', month: 'Jul', year: '1965' })
kman.photo.attach(io: defaultProPic, filename: 'bookface-jim.png')

defaultProPic = File.open('app/assets/images/user_show/bookface-jim.png')
newguy = User.create({ firstname: 'New', lastname: 'Guy', username: 'theNewGuy', password: 'password', gender: 'male', day: '31', month: 'Dec', year: '2000' })
newguy.photo.attach(io: defaultProPic, filename: 'bookface-jim.png')

defaultProPic = File.open('app/assets/images/user_show/bookface-jim.png')
drew = User.create({ firstname: 'Drew', lastname: 'Barrymore', username: 'originalDB', password: 'password', gender: 'female', day: '22', month: 'Feb', year: '1975' })
drew.photo.attach(io: defaultProPic, filename: 'bookface-jim.png')

defaultProPic = File.open('app/assets/images/user_show/bookface-jim.png')
rock = User.create({ firstname: 'The', lastname: 'Rock', username: 'DtheRockJ', password: 'password', gender: 'Male', day: '2', month: 'May', year: '1972' })
rock.photo.attach(io: defaultProPic, filename: 'bookface-jim.png')

defaultProPic = File.open('app/assets/images/user_show/bookface-jim.png')
weights = User.create({ firstname: 'Weights', lastname: '', username: 'weights', password: 'password', gender: 'female', day: '5', month: 'May', year: '2005' })
weights.photo.attach(io: defaultProPic, filename: 'bookface-jim.png')

defaultProPic = File.open('app/assets/images/user_show/bookface-jim.png')
dean = User.create({ firstname: 'James', lastname: 'Dean', username: 'jimmydean', password: 'password', gender: 'male', day: '8', month: 'Feb', year: '1931' })
dean.photo.attach(io: defaultProPic, filename: 'bookface-jim.png')


Profile.create(user_id: demo.id)
Profile.create(user_id: trundle.id)
Profile.create(user_id: tes.id)
Profile.create(user_id: lomez.id)
Profile.create(user_id: scarn.id)
Profile.create(user_id: choc.id)
Profile.create(user_id: kman.id)
Profile.create(user_id: newguy.id)
Profile.create(user_id: weights.id)
Profile.create(user_id: rock.id)
Profile.create(user_id: drew.id)
Profile.create(user_id: dean.id)


Post.create({ wall_id: demo.id, poster_id: tes.id, body: 'Welcome to Bookface' })
Post.create({ wall_id: tes.id, poster_id: lomez.id, body: 'you left your vacuum cleaner at my place' })
Post.create({ wall_id: scarn.id, poster_id: trundle.id, body: 'did you upload the video of your dance?' })
Post.create({ wall_id: lomez.id, poster_id: scarn.id, body: 'have u seen my dance?' })
Post.create({ wall_id: weights.id, poster_id: rock.id, body: 'cool' })
Post.create({ wall_id: lomez.id, poster_id: kman.id, body: 'heya buddy' })

Friendship.create({ friender_id: demo.id, friendee_id: lomez.id, status: 'approved' })
Friendship.create({ friender_id: tes.id, friendee_id: demo.id, status: 'approved' })
Friendship.create({ friender_id: scarn.id, friendee_id: demo.id, status: 'pending' })
Friendship.create({ friender_id: scarn.id, friendee_id: trundle.id, status: 'approved' })
Friendship.create({ friender_id: dean.id, friendee_id: demo.id, status: 'pending' })
Friendship.create({ friender_id: tes.id, friendee_id: scarn.id, status: 'approved' })
Friendship.create({ friender_id: rock.id, friendee_id: weights.id, status: 'approved' })
Friendship.create({ friender_id: lomez.id, friendee_id: kman.id, status: 'approved' })
Friendship.create({ friender_id: drew.id, friendee_id: dean.id, status: 'approved' })
Friendship.create({ friender_id: dean.id, friendee_id: scarn.id, status: 'approved' })
Friendship.create({ friender_id: choc.id, friendee_id: dean.id, status: 'approved' })
Friendship.create({ friender_id: dean.id, friendee_id: newguy.id, status: 'approved' })
