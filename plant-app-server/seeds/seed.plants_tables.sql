BEGIN;

TRUNCATE
  plants_users,
  plants_base,
  plants_questions,
  plants_answers,
  plants_wishes
  RESTART IDENTITY CASCADE;

INSERT INTO plants_users (user_name, password)
VALUES
  ('guest', '$2a$12$.OaB0zHrqDIJr15F0gYxL.xXFykBh4KIEmIxlKmkaqFcn5C36Z3wm');

INSERT INTO plants_base (cmn_name, sci_name, photo, light, pet_safe, water, size, care_level)
VALUES
  ('Pothos', 'Epipremnum aureum', 'https://plant-app-images.s3.us-east-2.amazonaws.com/epipremnum-aureum.jpg', 'medium', 'no', 'low', 'tabletop', 'beginner'),
  ('Aloe', 'Aloe barbadensis', 'https://plant-app-images.s3.us-east-2.amazonaws.com/aloe-vera.jpg', 'high', 'no', 'low', 'tabletop', 'beginner'),
  ('Cast iron plant', 'Aspidistra elatior', 'https://plant-app-images.s3.us-east-2.amazonaws.com/aspidistra-elatior.jpg', 'low', 'yes', 'low', 'medium', 'beginner'),
  ('Chinese evergreen', 'Aglaonema', 'https://plant-app-images.s3.us-east-2.amazonaws.com/aglaonema.jpg', 'medium', 'no', 'high', 'small', 'intermediate'),
  ('Peace lily', 'Spathiphyllum', 'https://plant-app-images.s3.us-east-2.amazonaws.com/spathiphyllum.jpg', 'medium', 'no', 'high', 'tabletop', 'beginner'),
  ('Staghorn fern', 'Platycerium alcicorn', 'https://plant-app-images.s3.us-east-2.amazonaws.com/platycerium-alcicorn.jpeg', 'high', 'yes', 'high', 'small', 'advanced'),
  ('African violet', 'Saintpaulia', 'https://plant-app-images.s3.us-east-2.amazonaws.com/saintpaulia.jpg', 'medium', 'yes', 'high', 'tabletop', 'advanced'),
  ('Banana tree', 'musa spp.', 'https://plant-app-images.s3.us-east-2.amazonaws.com/musa-spp.jpg', 'high', 'yes', 'high', 'large', 'beginner'),
  (null, 'Monstera deliciosa', 'https://plant-app-images.s3.us-east-2.amazonaws.com/monstera-deliciosa.jpg', 'medium', 'no', 'medium', 'medium', 'intermediate'),
  ('Swiss cheese vine', 'Monstera adasonii', 'https://plant-app-images.s3.us-east-2.amazonaws.com/monstera-adasonii.jpg', 'medium', 'no', 'medium', 'small', 'intermediate'),
  ('Snake plant', 'Sansevieria trifasciata', 'https://plant-app-images.s3.us-east-2.amazonaws.com/sansevieria-trifasciata.jpg', 'low', 'no', 'low', 'tabletop', 'beginner'),
  (null, 'Plasticus ficus', 'https://plant-app-images.s3.us-east-2.amazonaws.com/plasticus-ficus.jpg', 'none', 'yes', 'low', 'tabletop', 'beginner');

INSERT INTO plants_questions (question, answer_1, answer_2, answer_3, answer_4)
VALUES
  ('What light will you have for your plant?', 'A bright spot', 'A shadier spot', 'I can barely read a book', 'Artifical lighting only'),
  ('Do you have any pets?', 'Yes', 'No', null, null),
  ('How often do you like to water?', 'On a regular schedule', 'I forget from time to time', 'Wait, plants need water?', null),
  ('How much space do you have for your new plant?', 'Some tablespace', 'Small floor space or larger tablespace', 'A good space filler', 'I want a tree!'),
  ('How much of a green thumb are you?', 'Green? Its a bit more of a black thumb', 'I''ve kept a few plants alive', 'I definitely have a green thumb!', null);

  COMMIT;