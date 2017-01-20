# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
User.create(email: "demo.user@manasana.io", name: "Demo User", password: "demouser")
15.times do |i|
  User.create(email: Faker::Internet.email, name: Faker::Name.name, password: "password#{i}")
end

Team.destroy_all
Team.create(name: "App Academy", leader: User.first)
Team.create(name: "Tinder For Cats", leader: User.first)
Team.create(name: "Smart Garbage", leader: User.first)

Membership.destroy_all
Team.all.each do |team|
  Membership.create(user: User.first, team: team)
end

User.all[1...-1].each do |user|
  Membership.create(user: user, team: Team.all.sample)
end

Project.destroy_all
Team.all.each do |team|
  Project.create(name: Faker::Company.catch_phrase, description: Faker::Company.bs, team: team)
  Project.create(name: Faker::Company.catch_phrase, description: Faker::Company.bs, team: team)
  Project.create(name: Faker::Company.catch_phrase, description: Faker::Company.bs, team: team)
end

Task.destroy_all
Project.all.each do |project|
  3.times do |i|
    Task.create(name: Faker::Company.catch_phrase, description: Faker::Company.bs, author: User.first, project: project)
  end
end
