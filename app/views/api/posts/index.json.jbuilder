json.posts @posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :wall_id, :poster_id, :body, :created_at
  end
end

json.comments @comments.each do |com|
  json.set! com.id do
    json.extract! com, :id, :post_id, :commenter_id, :body
  end
end

json.postLikes @post_likes.each do |like|
  json.set! like.id do
    json.extract! like, :id, :post_id, :liker_id
  end
end
