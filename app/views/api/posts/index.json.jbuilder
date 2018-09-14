@posts.each do |post|
  json.set! post.wall_id do
    json.extract! post, :id, :wall_id, :poster_id, :body
  end
end
