# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRexord::Base.transaction do
  User.destroy_all
    Chuck = User.create!(username: "Walker Texas Ranger", password: "thisisApassword1", name: "Chuck Norris", profile_body: "Time waits for no man. Unless that man is Chuck Norris.")
    Sylvester = User.create!(username: "John Rambo", password: "thisisApassword1", name: "Sylvester Stallone", profile_body: "In town you're the law, out here it's me. Don't push it. Don't push it or I'll give you a war you won't believe.")
    Arnold = User.create!(username: "Terminator", password: "thisisApassword1", name: "Arnold Schwarzenegger", profile_body: "I'll be back.")
    Jean = User.create!(username: "Chad Wagner", password: "thisisApassword1", name: "Jean-Claude Van Damme", profile_body: "Look like me? You, of all people, should know I would never in my life wear black-silk underwear!")
    Steve = User.create!(username: "Stone Cold", password: "thisisApassword1", name: "Steve Austin", profile_body: "And that's the bottom line, cuz Stone Cold said so!")

  Posts.destroy_all
    C1 = Post.create!(author_id: 1, body_text: "The First rule of Chuck Norris is: you do not talk about Chuck Norris.")
    C2 = Post.create!(author_id: 1, body_text: "Chuck Norris doesn't read books. He stares them down until he gets the information he wants.")
    C3 = Post.create!(author_id: 1, body_text: "Chuck Norris counted to infinity... Twice.")
    C4 = Post.create!(author_id: 1, body_text: "Chuck Norris plays racquetball with a waffle iron and a bowling ball.")
    C5 = Post.create!(author_id: 1, body_text: "Chuck Norris had to stop washing his clothes in the ocean. The tsunamis were killing people.")
    C6 = Post.create!(author_id: 1, body_text: "Chuck Norris CAN in fact 'raise the roof'. And he can do it with one hand.")
    C7 = Post.create!(author_id: 1, body_text: "Chuck Norris actually built the stairway to heaven.")
    C8 = Post.create!(author_id: 1, body_text: "Chuck Norris can split the atom. With his bare hands.")

end