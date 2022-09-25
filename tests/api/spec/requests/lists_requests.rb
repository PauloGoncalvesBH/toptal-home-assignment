# frozen_string_literal: true

require_relative 'base_class'

class ListsRequests < Base
  def get_all_lists
    self.class.get('/lists')
  end

  def post_list(payload)
    self.class.post('/lists/add', headers: { "Content-Type": 'application/json' },
      body: payload.to_json)
  end

  def delete_list(list_id)
    self.class.delete("/lists/#{list_id}")
  end
end
