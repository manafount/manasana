# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Tasks

- `GET /api/tasks`
  - Search Tasks belonging to or assigned to current User
  - Matches Task title, description, or team name
- `POST /api/tasks`
- `GET /api/tasks/:id`
- `PATCH /api/tasks/:id`
- `DELETE /api/tasks/:id`

### Projects

- `GET /api/projects`
- `POST /api/projects`
- `GET /api/projects/:id`
- `DELETE /api/projects/:id`
- `GET /api/projects/:id/tasks`
  - index of all tasks for a project

### Teams

- `GET /api/teams`
- `POST /api/teams`
- `DELETE /api/teams`
- `GET /api/teams/:id/users`
  - list of all members of a team (for use in sidebar)
