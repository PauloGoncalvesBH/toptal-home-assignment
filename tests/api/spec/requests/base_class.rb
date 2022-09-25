# frozen_string_literal: true

require 'httparty'

class Base
  include HTTParty
  base_uri 'http://localhost:4567'
  # debug_output $stdout
end
