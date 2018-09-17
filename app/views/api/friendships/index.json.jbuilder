@friendships.each do |ship|
  json.set! ship.id do
    json.extract! ship, :id, :friender_id, :friendee_id, :status
    json.friender @frienders[ship.id], :id, :username
  end
end
