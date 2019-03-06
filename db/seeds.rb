# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

ActiveRecord::Base.transaction do
  User.destroy_all
    chuck = User.create!(username: "Chuck", email: 'email@email.com', password: "thisisApassword1", profile_photo:{ io: open("https://s3-us-west-1.amazonaws.com/anagram-dev-aa/chuck.jpg"), filename: "chuck.jpg"}, name: "Norris", profile_body: "Time waits for no man. Unless that man is Chuck Norris.")
    sylvester = User.create!(username: "John Rambo", email: 'email1@email.com', password: "thisisApassword1", profile_photo:{ io: open("https://s3-us-west-1.amazonaws.com/anagram-dev-aa/sylvester.jpg"), filename: "sylvester.jpg"}, name: "Sylvester Stallone", profile_body: "In town you're the law, out here it's me. Don't push it. Don't push it or I'll give you a war you won't believe.")
    jackie = User.create!(username: "Its Jackie!", email: 'email2@email.com', password: "thisisApassword1", profile_photo:{ io: open("https://s3-us-west-1.amazonaws.com/anagram-dev-aa/jackie.jpg"), filename: "jackie.jpg"}, name: "Jackie Chan", profile_body: "Short, but, sturdy.")
    jean = User.create!(username: "Chad Wagner", email: 'email3@email.com', password: "thisisApassword1", profile_photo:{ io: open("https://s3-us-west-1.amazonaws.com/anagram-dev-aa/jean.jpg"), filename: "jean.jpg"}, name: "Jean-Claude Van Damme", profile_body: "Look like me? You, of all people, should know I would never in my life wear black-silk underwear!")
    terry = User.create!(username: "Terry", email: 'email4@email.com', password: "thisisApassword1", profile_photo:{ io: open("https://s3-us-west-1.amazonaws.com/anagram-dev-aa/terry.jpeg"), filename: "terry.jpeg"}, name: "Crews", profile_body: "I love yogurt!")

  Post.destroy_all
    p1 = Post.create!(author_id: chuck.id, photo:{ io: open("https://s3-us-west-1.amazonaws.com/anagram-dev-aa/s7.jpg"), filename: "s7.jpg"}, body_text: "The First rule of Chuck Norris is: you do not talk about Chuck Norris.")
    p2 = Post.create!(author_id: chuck.id, photo:{ io: open("https://s3-us-west-1.amazonaws.com/anagram-dev-aa/s6.jpg"), filename: "s6.jpg"}, body_text: "Chuck Norris doesn't read books. He stares them down until he gets the information he wants.")
    p3 = Post.create!(author_id: chuck.id, photo:{ io: open("https://s3-us-west-1.amazonaws.com/anagram-dev-aa/s8.jpg"), filename: "s8.jpg"}, body_text: "Chuck Norris counted to infinity... Twice.")
    p4 = Post.create!(author_id: chuck.id, photo:{ io: open("https://s3-us-west-1.amazonaws.com/anagram-dev-aa/s10.jpg"), filename: "s10.jpg"}, body_text: "Chuck Norris plays racquetball with a waffle iron and a bowling ball.")
    p5 = Post.create!(author_id: chuck.id, photo:{ io: open("https://s3-us-west-1.amazonaws.com/anagram-dev-aa/s3.jpg"), filename: "s3.jpg"}, body_text: "Chuck Norris had to stop washing his clothes in the ocean. The tsunamis were killing people.")
    p6 = Post.create!(author_id: chuck.id, photo:{ io: open("https://s3-us-west-1.amazonaws.com/anagram-dev-aa/s9.jpg"), filename: "s9.jpg"}, body_text: "Chuck Norris CAN in fact 'raise the roof'. And he can do it with one hand.")
    p7 = Post.create!(author_id: chuck.id, photo:{ io: open("https://s3-us-west-1.amazonaws.com/anagram-dev-aa/s14.jpg"), filename: "s14.jpg"}, body_text: "Chuck Norris actually built the stairway to heaven.")
    p8 = Post.create!(author_id: chuck.id, photo:{ io: open("https://s3-us-west-1.amazonaws.com/anagram-dev-aa/s15.jpg"), filename: "s15.jpg"}, body_text: "Chuck Norris can split the atom. With his bare hands.")
    p9 = Post.create!(author_id: chuck.id, photo:{ io: open("https://s3-us-west-1.amazonaws.com/anagram-dev-aa/s9.jpg"), filename: "s9.jpg"}, body_text: "Once a cobra bit Chuck Norris' leg. After five days of excruciating pain, the cobra died.")
    p10 = Post.create!(author_id: chuck.id, photo:{ io: open("https://s3-us-west-1.amazonaws.com/anagram-dev-aa/s4.jpg"), filename: "s4.jpg"}, body_text: "Chuck Norris can kill two stones with one bird.")
    p11 = Post.create!(author_id: chuck.id, photo:{ io: open("https://s3-us-west-1.amazonaws.com/anagram-dev-aa/s1.jpg"), filename: "1.jpg"}, body_text: "Chuck Norris makes onions cry.")
    p12 = Post.create!(author_id: chuck.id, photo:{ io: open("https://s3-us-west-1.amazonaws.com/anagram-dev-aa/s2.jpg"), filename: "2.jpg"}, body_text: "Chuck Norris can hear sign language.")
    p13 = Post.create!(author_id: chuck.id, photo:{ io: open("https://s3-us-west-1.amazonaws.com/anagram-dev-aa/s5.jpg"), filename: "5.jpg"}, body_text: "Chuck Norris counted to infinity. Twice.")
    p14 = Post.create!(author_id: chuck.id, photo:{ io: open("https://s3-us-west-1.amazonaws.com/anagram-dev-aa/s12.jpg"), filename: "12.jpg"}, body_text: "Chuck Norris beat the sun in a staring contest.")
    p15 = Post.create!(author_id: chuck.id, photo:{ io: open("https://s3-us-west-1.amazonaws.com/anagram-dev-aa/s13.jpg"), filename: "13.jpg"}, body_text: "Chuck Norris is the reason Waldo is hiding.")
    p16 = Post.create!(author_id: chuck.id, photo:{ io: open("https://s3-us-west-1.amazonaws.com/anagram-dev-aa/s16.jpg"), filename: "16.jpg"}, body_text: "Chuck Norris's Blood Type is AK-47.")
    p17 = Post.create!(author_id: chuck.id, photo:{ io: open("https://s3-us-west-1.amazonaws.com/anagram-dev-aa/s17.jpg"), filename: "17.jpg"}, body_text: "Chuck Norris can build a snowman out of rain.")
    p18 = Post.create!(author_id: chuck.id, photo:{ io: open("https://s3-us-west-1.amazonaws.com/anagram-dev-aa/s18.jpg"), filename: "18.jpg"}, body_text: "Chuck Norris can strangle you with a cordless phone.")
    p19 = Post.create!(author_id: chuck.id, photo:{ io: open("https://s3-us-west-1.amazonaws.com/anagram-dev-aa/s19.jpg"), filename: "19.jpg"}, body_text: "Giraffes were created when Chuck Norris uppercutted a horse.")
end