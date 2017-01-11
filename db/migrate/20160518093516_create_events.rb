class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :title
      t.integer :price_m
      t.integer :price_f
      t.date :date
      t.datetime :datetime
      t.string :place
      t.string :url

      t.timestamps null: false
    end
  end
end
