drop table if exits users;
drop table if exists stars;
drop table if exists competencies;
/* drop table if exists examples; */

CREATE TABLE users (
  id                     SERIAL PRIMARY KEY,
  first_name             VARCHAR(30) NOT NULL,
  last_name              VARCHAR(30) NOT NULL,
  email                  VARCHAR(30) NOT NULL,
  password               TEXT NOT NULL,
  created_at             TIMESTAMP  NOT NULL,
  updated_at             TIMESTAMP  NOT NULL
);

CREATE TABLE stars (
    id                   SERIAL PRIMARY KEY,
    user_id              INTEGER,
    competence           TEXT NOT NULL,
    title                TEXT NOT NULL,
    situation            TEXT NOT NULL,
    task                 TEXT NOT NULL,
    action               TEXT NOT NULL,
    result               TEXT NOT NULL,
    created_at           TIMESTAMP  NOT NULL,
    updated_at           TIMESTAMP  NOT NULL
);

/* Proprity 4
CREATE TABLE examples (
    id                       SERIAL PRIMARY KEY,
    example_competence_id    INT NOT NULL,
    example_title            TEXT NOT NULL,
    example_situation        TEXT NOT NULL,
    example_task             TEXT NOT NULL,
    example_action           TEXT NOT NULL,
    example_result           TEXT NOT NULL,
);  */

INSERT INTO users (id, first_name, last_name, email, password, created_at) VALUES (1,'John', 'Smith', 'j.smith@johnsmith.org', 'prawn345!', '' );

INSERT INTO users (id, first_name, last_name, email, password, created_at) VALUES (2, 'Sue', 'Jones', 's.jones1234@gmail.com', 'Chickenwaffle3!', '');

INSERT INTO users (id, first_name, last_name, email, password, created_at) VALUES (3, 'Alice', 'Evans', 'alice.evans001@hotmail.com','fishandchip2!', '');

INSERT INTO users (id, first_name, last_name, email, password, created_at) VALUES (4, 'Mohammed', 'Trungpa', 'mo.trungpa@hotmail.com','' );

INSERT INTO stars (id, user_id, competence,
title, situation, task, action, result, created_at, updated_at) VALUES (2, 3, 'Time Management', 'Tell me a time you worked under pressure?', 'Throughout the duration of the coding bootcamp, I worked as a Chef with shift schedule of 2pm to midnight', 'To excel in the full stack bootcamp course I needed to commit to an effective study schedule and find a workaround to stay connected with my team', 'First I made a study schedule outside my rest and work time, allocating hours study session each day. I made use of my weekend to meet up with my team for pair programming and the mentors for coding review.','The schedule helped me stay accountable to myself and effective. I was able to complete the set weekly coursework on time. In additional successful finish the final project with my team.', '05/03/2022', '09/03/2022' );

