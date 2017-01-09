# Schema

## Users
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
email       | string    | not null, unique
name        |  string   | not null
password_digest    | string   | not null
session_token    | string   | not null, unique

## Tasks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
description | text      |
due         | date      |
author_id  | integer   | not null, foreign key (references users), indexed
project_id  | integer   | not null, foreign key (references projects), indexed
assignee_id | integer   | not null, foreign key (references users), indexed
completed   | boolean   | not null, default: false

## Projects
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
description | text      |
team_id     | integer   | not null, foreign key (references team), indexed

## Teams
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## Comments (bonus)
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
author_id   | integer   | not null, foreign key (references user), indexed
task_id     | integer   | not null, foreign key (references task), indexed
