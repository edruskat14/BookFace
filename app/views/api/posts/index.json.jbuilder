@posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :wall_id, :poster_id, :body, :created_at
    json.comments @comments[post.id]
  end
end
