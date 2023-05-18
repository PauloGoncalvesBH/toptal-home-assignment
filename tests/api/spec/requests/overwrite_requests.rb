# frozen_string_literal: true

require_relative 'base_class'

class OverwriteRequests < Base
  def post_overwrite_database(payload)
    self.class.post('/overwrite_database', headers: { "Content-Type": 'application/json' }, body: payload.to_json)
  end
end
