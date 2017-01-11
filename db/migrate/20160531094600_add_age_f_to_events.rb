class AddAgeFToEvents < ActiveRecord::Migration
  def change
    add_column :events, :age_f, :integer
  end
end
