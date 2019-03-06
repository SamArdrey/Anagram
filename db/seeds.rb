# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# ActiveRecord::Base.transaction do
#   User.destroy_all
#     chuck = User.create!(username: "Chuck", email: 'email@email.com', password: "thisisApassword1", name: "Norris", profile_body: "Time waits for no man. Unless that man is Chuck Norris.")
#     sylvester = User.create!(username: "John Rambo", email: 'email1@email.com', password: "thisisApassword1", name: "Sylvester Stallone", profile_body: "In town you're the law, out here it's me. Don't push it. Don't push it or I'll give you a war you won't believe.")
#     jackie = User.create!(username: "Its Jackie!", email: 'email2@email.com', password: "thisisApassword1", name: "Jackie Chan", profile_body: "Short, but, sturdy.")
#     jean = User.create!(username: "Chad Wagner", email: 'email3@email.com', password: "thisisApassword1", name: "Jean-Claude Van Damme", profile_body: "Look like me? You, of all people, should know I would never in my life wear black-silk underwear!")
#     terry = User.create!(username: "Terry", email: 'email4@email.com', password: "thisisApassword1", name: "crews", profile_body: "I love yogurt!")

#     c = File.open('/Users/admin/Desktop/Anagram/app/assets/images/chuck.jpg')
#     t = File.open('/Users/admin/Desktop/Anagram/app/assets/images/terry.jpeg')
#     s = File.open('/Users/admin/Desktop/Anagram/app/assets/images/sylvester.jpg')
#     j = File.open('/Users/admin/Desktop/Anagram/app/assets/images/jackie.jpg')
#     jc = File.open('/Users/admin/Desktop/Anagram/app/assets/images/jean.jpg')

#     chuck.profile_photo.attach(io: c, filename: 'chuck.jpg')
#     sylvester.profile_photo.attach(io: s, filename: 'sylvester.jpg')
#     jackie.profile_photo.attach(io: j, filename: 'jackie.jpg')
#     jean.profile_photo.attach(io: jc, filename: 'jean.jpg')
#     terry.profile_photo.attach(io: t, filename: 'terry.jpeg')


#   Post.destroy_all
#     c1 = Post.create!(author_id: chuck.id, body_text: "The First rule of Chuck Norris is: you do not talk about Chuck Norris.")
#     c2 = Post.create!(author_id: chuck.id, body_text: "Chuck Norris doesn't read books. He stares them down until he gets the information he wants.")
#     c3 = Post.create!(author_id: chuck.id, body_text: "Chuck Norris counted to infinity... Twice.")
#     c4 = Post.create!(author_id: chuck.id, body_text: "Chuck Norris plays racquetball with a waffle iron and a bowling ball.")
#     c5 = Post.create!(author_id: chuck.id, body_text: "Chuck Norris had to stop washing his clothes in the ocean. The tsunamis were killing people.")
#     c6 = Post.create!(author_id: chuck.id, body_text: "Chuck Norris CAN in fact 'raise the roof'. And he can do it with one hand.")
#     c7 = Post.create!(author_id: chuck.id, body_text: "Chuck Norris actually built the stairway to heaven.")
#     c8 = Post.create!(author_id: chuck.id, body_text: "Chuck Norris can split the atom. With his bare hands.")
#     c9 = Post.create!(author_id: chuck.id, body_text: "Once a cobra bit Chuck Norris' leg. After five days of excruciating pain, the cobra died.")
#     c10 = Post.create!(author_id: chuck.id, body_text: "Chuck Norris can kill two stones with one bird.")
#     c11 = Post.create!(author_id: chuck.id, body_text: "Chuck Norris makes onions cry.")
#     c12 = Post.create!(author_id: chuck.id, body_text: "Chuck Norris can hear sign language.")
#     c13 = Post.create!(author_id: chuck.id, body_text: "Chuck Norris counted to infinity. Twice.")
#     c14 = Post.create!(author_id: chuck.id, body_text: "Chuck Norris beat the sun in a staring contest.")
#     c15 = Post.create!(author_id: chuck.id, body_text: "Chuck Norris is the reason Waldo is hiding.")
#     c16 = Post.create!(author_id: chuck.id, body_text: "Chuck Norris's Blood Type is AK-47.")
#     c17 = Post.create!(author_id: chuck.id, body_text: "Chuck Norris can build a snowman out of rain.")
#     c18 = Post.create!(author_id: chuck.id, body_text: "Chuck Norris can strangle you with a cordless phone.")
#     c19 = Post.create!(author_id: chuck.id, body_text: "Giraffes were created when Chuck Norris uppercutted a horse.")

#     f1 = File.open('/Users/admin/Desktop/Anagram/app/assets/images/s1.jpg')
#     f2 = File.open('/Users/admin/Desktop/Anagram/app/assets/images/s2.jpg')
#     f3 = File.open('/Users/admin/Desktop/Anagram/app/assets/images/s3.jpg')
#     f4 = File.open('/Users/admin/Desktop/Anagram/app/assets/images/s4.jpg')
#     f5 = File.open('/Users/admin/Desktop/Anagram/app/assets/images/s5.jpg')
#     f6 = File.open('/Users/admin/Desktop/Anagram/app/assets/images/s6.jpg')
#     f7 = File.open('/Users/admin/Desktop/Anagram/app/assets/images/s7.jpg')
#     f8 = File.open('/Users/admin/Desktop/Anagram/app/assets/images/s8.jpg')
#     f9 = File.open('/Users/admin/Desktop/Anagram/app/assets/images/s9.jpg')
#     f10 = File.open('/Users/admin/Desktop/Anagram/app/assets/images/s10.jpg')
#     f11 = File.open('/Users/admin/Desktop/Anagram/app/assets/images/s11.jpg')
#     f12 = File.open('/Users/admin/Desktop/Anagram/app/assets/images/s12.jpg')
#     f13 = File.open('/Users/admin/Desktop/Anagram/app/assets/images/s13.jpg')
#     f14 = File.open('/Users/admin/Desktop/Anagram/app/assets/images/s14.jpg')
#     f15 = File.open('/Users/admin/Desktop/Anagram/app/assets/images/s15.jpg')
#     f16 = File.open('/Users/admin/Desktop/Anagram/app/assets/images/s16.jpg')
#     f17 = File.open('/Users/admin/Desktop/Anagram/app/assets/images/s17.jpg')
#     f18 = File.open('/Users/admin/Desktop/Anagram/app/assets/images/s18.jpg')
#     f19 = File.open('/Users/admin/Desktop/Anagram/app/assets/images/s19.jpg')

#     c1.photo.attach(io: f1, filename: 's1')
#     c2.photo.attach(io: f2, filename: 's2')
#     c3.photo.attach(io: f3, filename: 's3')
#     c4.photo.attach(io: f4, filename: 's4')
#     c5.photo.attach(io: f5, filename: 's5')
#     c6.photo.attach(io: f6, filename: 's6')
#     c7.photo.attach(io: f7, filename: 's7')
#     c8.photo.attach(io: f8, filename: 's8')
#     c9.photo.attach(io: f9, filename: 's9')
#     c10.photo.attach(io: f10, filename: 's10')
#     c11.photo.attach(io: f11, filename: 's11')
#     c12.photo.attach(io: f12, filename: 's12')
#     c13.photo.attach(io: f13, filename: 's13')
#     c14.photo.attach(io: f14, filename: 's14')
#     c15.photo.attach(io: f15, filename: 's15')
#     c16.photo.attach(io: f16, filename: 's16')
#     c17.photo.attach(io: f17, filename: 's17')
#     c18.photo.attach(io: f18, filename: 's18')
#     c19.photo.attach(io: f19, filename: 's19')

# end

require ‘open-uri’

ActiveRecord::Base.transaction do
  User.destroy_all
    chuck = User.create!(username: "Chuck", email: 'email@email.com', password: "thisisApassword1", name: "Norris", profile_body: "Time waits for no man. Unless that man is Chuck Norris.")
    sylvester = User.create!(username: "John Rambo", email: 'email1@email.com', password: "thisisApassword1", name: "Sylvester Stallone", profile_body: "In town you're the law, out here it's me. Don't push it. Don't push it or I'll give you a war you won't believe.")
    jackie = User.create!(username: "Its Jackie!", email: 'email2@email.com', password: "thisisApassword1", name: "Jackie Chan", profile_body: "Short, but, sturdy.")
    jean = User.create!(username: "Chad Wagner", email: 'email3@email.com', password: "thisisApassword1", name: "Jean-Claude Van Damme", profile_body: "Look like me? You, of all people, should know I would never in my life wear black-silk underwear!")
    terry = User.create!(username: "Terry", email: 'email4@email.com', password: "thisisApassword1", name: "crews", profile_body: "I love yogurt!")

    c = File.open('/Users/admin/Desktop/Anagram/app/assets/images/chuck.jpg')
    t = File.open('/Users/admin/Desktop/Anagram/app/assets/images/terry.jpeg')
    s = File.open('/Users/admin/Desktop/Anagram/app/assets/images/sylvester.jpg')
    j = File.open('/Users/admin/Desktop/Anagram/app/assets/images/jackie.jpg')
    jc = File.open('/Users/admin/Desktop/Anagram/app/assets/images/jean.jpg')

    chuck.profile_photo.attach(io: c, filename: 'chuck.jpg')
    sylvester.profile_photo.attach(io: s, filename: 'sylvester.jpg')
    jackie.profile_photo.attach(io: j, filename: 'jackie.jpg')
    jean.profile_photo.attach(io: jc, filename: 'jean.jpg')
    terry.profile_photo.attach(io: t, filename: 'terry.jpeg')


  Post.destroy_all
    c1 = Post.create!(author_id: chuck.id, photo:{ io: open("", filename: "")} body_text: "The First rule of Chuck Norris is: you do not talk about Chuck Norris.")
    c2 = Post.create!(author_id: chuck.id, photo:{ io: open("", filename: "")} body_text: "Chuck Norris doesn't read books. He stares them down until he gets the information he wants.")
    c3 = Post.create!(author_id: chuck.id, photo:{ io: open("", filename: "")} body_text: "Chuck Norris counted to infinity... Twice.")
    c4 = Post.create!(author_id: chuck.id, photo:{ io: open("", filename: "")} body_text: "Chuck Norris plays racquetball with a waffle iron and a bowling ball.")
    c5 = Post.create!(author_id: chuck.id, photo:{ io: open("", filename: "")} body_text: "Chuck Norris had to stop washing his clothes in the ocean. The tsunamis were killing people.")
    c6 = Post.create!(author_id: chuck.id, photo:{ io: open("", filename: "")} body_text: "Chuck Norris CAN in fact 'raise the roof'. And he can do it with one hand.")
    c7 = Post.create!(author_id: chuck.id, photo:{ io: open("", filename: "")} body_text: "Chuck Norris actually built the stairway to heaven.")
    c8 = Post.create!(author_id: chuck.id, photo:{ io: open("", filename: "")} body_text: "Chuck Norris can split the atom. With his bare hands.")
    c9 = Post.create!(author_id: chuck.id, photo:{ io: open("", filename: "")} body_text: "Once a cobra bit Chuck Norris' leg. After five days of excruciating pain, the cobra died.")
    c10 = Post.create!(author_id: chuck.id, photo:{ io: open("", filename: "")} body_text: "Chuck Norris can kill two stones with one bird.")
    c11 = Post.create!(author_id: chuck.id, photo:{ io: open("", filename: "")} body_text: "Chuck Norris makes onions cry.")
    c12 = Post.create!(author_id: chuck.id, photo:{ io: open("", filename: "")} body_text: "Chuck Norris can hear sign language.")
    c13 = Post.create!(author_id: chuck.id, photo:{ io: open("", filename: "")} body_text: "Chuck Norris counted to infinity. Twice.")
    c14 = Post.create!(author_id: chuck.id, photo:{ io: open("", filename: "")} body_text: "Chuck Norris beat the sun in a staring contest.")
    c15 = Post.create!(author_id: chuck.id, photo:{ io: open("", filename: "")} body_text: "Chuck Norris is the reason Waldo is hiding.")
    c16 = Post.create!(author_id: chuck.id, photo:{ io: open("", filename: "")} body_text: "Chuck Norris's Blood Type is AK-47.")
    c17 = Post.create!(author_id: chuck.id, photo:{ io: open("", filename: "")} body_text: "Chuck Norris can build a snowman out of rain.")
    c18 = Post.create!(author_id: chuck.id, photo:{ io: open("", filename: "")} body_text: "Chuck Norris can strangle you with a cordless phone.")
    c19 = Post.create!(author_id: chuck.id, photo:{ io: open("", filename: "")} body_text: "Giraffes were created when Chuck Norris uppercutted a horse.")
end