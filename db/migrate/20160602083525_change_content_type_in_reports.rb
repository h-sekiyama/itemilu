class ChangeContentTypeInReports < ActiveRecord::Migration
  def change
      change_column :events, :datetime, :timestamp
  end
end
