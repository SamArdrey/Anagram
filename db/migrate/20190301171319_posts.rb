class Posts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :body_text
      t.integer :author_id, null: false

      t.timestamps
    end

    add_index :posts, :author_id
  end
end
