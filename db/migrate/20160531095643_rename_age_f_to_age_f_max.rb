class RenameAgeFToAgeFMax < ActiveRecord::Migration
  def change
    rename_column :events, :age_f, :age_f_max
  end
end
