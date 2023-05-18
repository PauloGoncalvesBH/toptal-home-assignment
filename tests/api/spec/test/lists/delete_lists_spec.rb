# frozen_string_literal: true

describe 'DELETE /lists/:list_id' do
  before(:each) do
    @database = [
      {
        name: Faker::Commerce.product_name,
        items: [
          {
            label:Faker::Commerce.product_name,
            completed: false
          },
          {
            label:Faker::Commerce.product_name,
            completed: true
          },
        ]
      },
    ]

    overwrite_requests.post_overwrite_database(@database)
  end

  it 'should delete a list with success regardless of the status of the List items that it contains' do
    @list_index = 0
    responseDeletedList = list_requests.delete_list(@list_index)

    expect(responseDeletedList.code).to eql 200
    expect(responseDeletedList.parsed_response).to eql []
  end
end
