# frozen_string_literal: true

require_relative 'support/global_instances/lists_instances'
require_relative 'support/global_instances/overwrite_instances'
require_relative 'support/global_instances/items_instances'

require_relative 'requests/lists_requests'
require_relative 'requests/overwrite_requests'
require_relative 'requests/items_requests'

require 'faker'

RSpec.configure do |config|
  config.default_path = 'spec/tests'
end
