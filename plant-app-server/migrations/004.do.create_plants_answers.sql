CREATE TABLE plants_answers (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  question INTEGER REFERENCES plants_questions(id) NOT NULL,
  answer_text TEXT NOT NULL,
  answer_value TEXT NOT NULL
);