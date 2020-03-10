CREATE TABLE plants_base (
  id SERIAL PRIMARY KEY,
  cmn_name TEXT,
  sci_name TEXT NOT NULL,
  light TEXT NOT NULL,
  pet_safe BOOLEAN,
  water TEXT NOT NULL,
  size TEXT NOT NULL,
  care_level TEXT NOT NULL
);