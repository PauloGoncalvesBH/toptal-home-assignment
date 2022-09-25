# frozen_string_literal: true

describe 'DELETE /list/:list_id/item/:item_id' do
  before(:all) do
    @database_with_items_not_completed = [
      {
        name: "Groceries",
        items: [
          { label: "Bread", completed: true },
          { label: "Cheese", completed: false },
        ],
      },
    ]

    overwrite_requests.post_overwrite_database(@database_with_items_not_completed)
  end

  it 'should remove only complete list Items' do
    @list_id = 0
    @item_id_item_completed = 0
    @item_id_item_not_completed = 1
    response_deleting_item_completed = items_requests.delete_item(@list_id, @item_id_item_completed)
    response_deleting_item_not_completed = items_requests.delete_item(@list_id, @item_id_item_not_completed)

    @remaining_item = { label: "Cheese", completed: false }

    expect(response_deleting_item_completed.code).to eql 200
    expect(response_deleting_item_completed.parsed_response[0]['label']).to eql @remaining_item[:label]
    expect(response_deleting_item_completed.parsed_response[0]['completed']).to eql @remaining_item[:completed]
    expect(response_deleting_item_completed.parsed_response[1]).to eql nil

    expect(response_deleting_item_not_completed.code).not_to eql 200
    expect(response_deleting_item_not_completed.parsed_response[0]['label']).to eql @remaining_item[:label]
    expect(response_deleting_item_not_completed.parsed_response[0]['completed']).to eql @remaining_item[:completed]
    expect(response_deleting_item_not_completed.parsed_response[1]).to eql nil
  end
end
