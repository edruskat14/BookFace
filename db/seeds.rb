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


defaultProPic = File.open('app/assets/images/user_show/bookface-jim.png')
demo = User.create({ username: 'DemoUser', password: 'password' })
demo.photo.attach(io: defaultProPic, filename: 'bookface-jim.png')

defaultProPic = File.open('app/assets/images/user_show/bookface-jim.png')
trundle = User.create({ username: 'TrundleTheGreat', password: 'paddyspub' })
trundle.photo.attach(io: defaultProPic, filename: 'bookface-jim.png')

defaultProPic = File.open('app/assets/images/user_show/bookface-jim.png')
tes = User.create({ username: 'test', password: 'password' })
tes.photo.attach(io: defaultProPic, filename: 'bookface-jim.png')

defaultProPic = File.open('app/assets/images/user_show/bookface-jim.png')
lomez = User.create({ username: 'Lomez', password: 'heybuddy' })
lomez.photo.attach(io: defaultProPic, filename: 'bookface-jim.png')

defaultProPic = File.open('app/assets/images/user_show/bookface-jim.png')
scarn = User.create({ username: 'MichaelScarn', password: 'aisle5' })
scarn.photo.attach(io: defaultProPic, filename: 'bookface-jim.png')



Post.create({ wall_id: demo.id, poster_id: tes.id, body: 'Welcome to Bookface' })
Post.create({ wall_id: tes.id, poster_id: lomez.id, body: 'you left your vacuum cleaner at my place' })
Post.create({ wall_id: scarn.id, poster_id: trundle.id, body: 'did you upload the video of your dance?' })
Post.create({ wall_id: lomez.id, poster_id: scarn.id, body: 'have u seen my dance?' })

Friendship.create({ friender_id: demo.id, friendee_id: lomez.id, status: 'approved' })
Friendship.create({ friender_id: tes.id, friendee_id: demo.id, status: 'approved' })
Friendship.create({ friender_id: scarn.id, friendee_id: demo.id, status: 'pending' })
Friendship.create({ friender_id: tes.id, friendee_id: scarn.id, status: 'approved' })
