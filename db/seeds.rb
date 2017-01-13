# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
User.create(email: "demo.user@manasana.io", name: "Matt", team_id: 1, password: "demouser")
5.times do |i|
  User.create(email: Faker::Internet.email, name: Faker::Name.name, team_id: 1, password: "password#{i}")
end

Team.destroy_all
Team.create(name: Faker::Company.name, leader: User.first)

Membership.destroy_all
User.all.each do |user|
  Membership.create(user: user, team: Team.first)
end
