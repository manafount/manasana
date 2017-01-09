```js
{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createTask: {errors: ["body can't be blank"]},
    addComment: {errors: ["body can't be blank"]}
  },
  tasks: {
    1: {
      title: "Do The Thing",
      body: "Accomplish The Goal",
      author_id: 1,
      project_id: 1,
      assignee_id: 1,
      comments: {
        1: {
          id: 1,
          task_id: 1,
          author_id: 2,
          body: "The Thing Isn't Done"
        }
      }
    }
  },
  team: {
    id: 1,
    name: "Teamwork Makes The Dream Work"
  },
  projects: {
    1: {
      id: 1,
      name: "Skynet",
      team_id: 1,
      description: "Completely Benign"
    }
  }
}
```
