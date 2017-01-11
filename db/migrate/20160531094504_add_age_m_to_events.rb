class AddAgeMToEvents < ActiveRecord::Migration
  def change
    add_column :events, :age_m, :integer
  end
end
