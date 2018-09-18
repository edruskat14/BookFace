@notifications.each do |notif|
  json.set! notif.id do
      json.extract! notif, :id, :message
  end
end
