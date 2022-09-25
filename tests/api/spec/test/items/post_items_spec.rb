# frozen_string_literal: true

describe 'POST /list/:list_id/add' do
  before(:each) do
    @database = [
      {
        name: Faker::Commerce.product_name,
        items: []
      },
    ]

    overwrite_requests.post_overwrite_database(@database)
  end

  it 'a list should have multiple list Items when creating multiple list Items' do
    @list_id = 0
    @payload_first_item = { label: Faker::Commerce.product_name }
    @payload_second_item = { label: Faker::Commerce.product_name }

    response_first_item_added = items_requests.post_item(@list_id, @payload_first_item)
    response_second_item_added = items_requests.post_item(@list_id, @payload_second_item)

    response_all_lists = list_requests.get_all_lists

    expect(response_first_item_added.code).to eql 200
    expect(response_second_item_added.code).to eql 200
    expect(response_all_lists.code).to eql 200
    expect(response_all_lists.parsed_response[0]['items'][0]['label']).to eql @payload_first_item[:label]
    expect(response_all_lists.parsed_response[0]['items'][1]['label']).to eql @payload_second_item[:label]
  end
end
