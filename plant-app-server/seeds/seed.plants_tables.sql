BEGIN;

TRUNCATE
  plants_base
  RESTART IDENTITY CASCADE;

INSERT INTO plants_base (cmn_name, sci_name, light, pet_safe, water, size, care_level)
VALUES
  ('Pothos', 'Epipremnum aureum', 'all', false, 'light', 'tabletop', 'beginner'),
  ('Aloe', 'Aloe barbadensis', 'high', false, 'light', 'tabletop', 'beginner'),
  ('Cast iron plant', 'Aspidistra elatior', 'low', true, 'light', 'meduim', 'beginner'),
  ('Chinese evergreen', 'Aglaonema', 'medium', false, 'high', 'small', 'intermediate'),
  ('Peace lily', 'Spathiphyllum', 'medium', false, 'high', 'tabletop', 'beginner'),
  ('Staghorn fern', 'Platycerium alcicorn', 'high', true, 'high', 'small', 'advanced'),
  ('African violet', 'Saintpaulia', 'medium', true, 'high', 'tabletop', 'advanced'),
  ('Banana tree', 'musa spp.', 'high', true, 'high', 'large', 'beginner'),
  (null, 'Monstera deliciosa', 'medium', false, 'medium', 'medium', 'intermediate'),
  ('Swiss cheese vice', 'Monstera adasonii', 'medium', false, 'medium', 'small', 'intermediate'),
  ('Snake plant', 'Sansevieria trifasciata', 'low', false, 'low', 'tabletop', 'beginner'),
  (null, 'Plasticus ficus', 'none', true, 'low', 'large', 'beginner');

INSERT INTO plants_quiz (question, answer_1, answer_2, answer_3, answer_4)
VALUES
  ('What light will you have for your plant?', 'A bright spot', 'A shadier spot', 'I can barely read a book', 'Artifical lighting only'),
  ('Do you have any pets?', 'Yes', 'No', null, null),
  ('How often do you like to water?', 'On a regular schedule', 'I forget from time to time', 'Wait, plants need water?', null),
  ('How much space do you have for your new plant?', 'Some tablespace', 'Small floor space or larger tablespace', 'A good space filler', 'I want a tree!'),
  ('How much of a green thumb are you?', 'Green? Its a bit more of a black thumb', 'I''ve kept a few plants alive', 'I definitely have a green thumb!', null);

  COMMIT;