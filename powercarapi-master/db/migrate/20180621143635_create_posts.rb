class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.string :content
      t.string :image
      t.string :title

      t.timestamps
    end
  end
end
