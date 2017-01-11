class AddAgeMMinToEvents < ActiveRecord::Migration
  def change
    add_column :events, :age_m_min, :integer
    add_column :events, :age_f_min, :integer
  end
end
