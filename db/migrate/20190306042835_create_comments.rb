class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.integer :user_id, null: false
      t.integer :parent_id
      t.integer :post_id, null: false
      
      t.timestamps
    end

    add_index :comments, :user_id
    add_index :comments, :parent_id
  end
end
