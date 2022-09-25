# frozen_string_literal: true

describe 'POST /lists/add' do
  before(:each) do
    overwrite_requests.post_overwrite_database([])
  end

  it 'newly added lists should have no list items' do
    @payload_list = { name: Faker::Commerce.product_name }

    response_list = list_requests.post_list(@payload_list)

    expect(response_list.code).to eql 200
    expect(response_list.parsed_response['items']).to eql []
  end

  it 'users should have multiple lists when creating multiple lists' do
    @payload_first_list = { name: Faker::Commerce.product_name }
    @payload_second_list = { name: Faker::Commerce.product_name }

    response_first_list = list_requests.post_list(@payload_first_list)
    response_second_list = list_requests.post_list(@payload_second_list)

    response_all_lists = list_requests.get_all_lists

    expect(response_all_lists.code).to eql 200
    expect(response_first_list.code).to eql 200
    expect(response_second_list.code).to eql 200
    expect(response_all_lists.parsed_response[0]['name']).to eql @payload_first_list[:name]
    expect(response_all_lists.parsed_response[1]['name']).to eql @payload_second_list[:name]
  end
end
