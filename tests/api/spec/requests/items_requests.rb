# frozen_string_literal: true

require_relative 'base_class'

class ItemsRequests < Base
  def post_item(list_id, payload)
    self.class.post("/list/#{list_id}/add", headers: { "Content-Type": 'application/json' },
      body: payload.to_json)
  end

  def delete_item(list_id, item_id)
    self.class.delete("/list/#{list_id}/item/#{item_id}")
  end
end
