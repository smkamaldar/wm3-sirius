CREATE TABLE IF NOT EXISTS users (
  id                     SERIAL PRIMARY KEY,
  first_name             VARCHAR(30) NOT NULL,
  last_name              VARCHAR(30) NOT NULL,
  email                  VARCHAR(30) NOT NULL,
  password               TEXT NOT NULL,
  created_at             TIMESTAMP  NOT NULL,
  updated_at             TIMESTAMP  NOT NULL
);

CREATE TABLE IF NOT EXISTS stars (
    id                   SERIAL PRIMARY KEY,
    user_id              INT NOT NULL REFERENCES users(id),
    competence           TEXT NOT NULL,
    title                TEXT NOT NULL,
    situation            TEXT NOT NULL,
    task                 TEXT NOT NULL,
    action               TEXT NOT NULL,
    result               TEXT NOT NULL,
    image                TEXT,
    created_at           TIMESTAMP  NOT NULL,
    updated_at           TIMESTAMP  NOT NULL
);

/* CREATE TABLE IF NOT EXISTS examples (
    id                       SERIAL PRIMARY KEY,
    user_id                  INT NOT NULL REFERENCES users(id),
    star_id                  INT NOT NULL REFERENCES stars(id),          
    example_competence       INT NOT NULL,
    example_title            TEXT NOT NULL,
    example_situation        TEXT NOT NULL,
    example_task             TEXT NOT NULL,
    example_action           TEXT NOT NULL,
    example_result           TEXT NOT NULL,
);  */

-- altering stars table
ALTER TABLE stars 
ADD COLUMN image TEXT;