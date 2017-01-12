class Addmembershipvalidations < ActiveRecord::Migration[5.0]
  def change
    change_column_null(:memberships, :team_id, false)
    change_column_null(:memberships, :user_id, false)
  end
end
