#Manasana
Manasana is a clone of the project management app [Asana](https://app.asana.com/). You can demo Manasana [here](https)

## Design Docs
* [Wireframes](./wireframes/)
* [React Components](./component-hierarchy.md)
* [API endpoints](./api-endpoints.md)
* [DB schema](./schema.md)
* [Sample State](./sample-state.md)

## Minimum Viable Product Checklist:
- [ ] Hosting on Heroku
- [ ] Production Readme
- [ ] Authentication
- [ ] Users
- [ ] Teams
- [ ] Projects
- [ ] Tasks
- [ ] **Bonus**: Task Comments
- [ ] **Bonus**: Calendar
- [ ] **Bonus**: Task Completion Chart

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1 day)

**Objective:** Functioning rails project with front-end Authentication
- [ ] Create `User` model
- [ ] Implement authentication
- [ ] Create splash page and sign-in/sign-up forms.
- [ ] Render (blank) dashboard on sign-in
- [ ] Return to splash page on sign-out
- [ ] Create basic main navigation bar with links to dashboard (empty), tasks (empty) and sign out.
- [ ] Implement React-Router and front-end routing

### Phase 2: Models and API (1 day)

**Objective:** Teams, Projects, and Tasks can be read, created, edited, and destroyed through the API.
- [ ] Create `Team` model and controller
- [ ] Create `Task` model and controller
- [ ] Create `Project` model and controller
- [ ] Create jbuilder views for each controller
- [ ] Verify correct API endpoint functionality through AJAX requests

### Phase 3: User and Team Components (1.5 days)

**Objective** Users should be able to create a team and invite other users via e-mail address or account name. Users should see their team members in the sidebar when browsing that team's projects.
- [ ] Create `UserProfile` React component
- [ ] Create `UserSettings` React component
- [ ] Create `TeamContainer` React component
- [ ] Create `TeamMemberList` React component
- [ ] Allow users to create a team
  - [ ] Teams must have at least one member
- [ ] Allow users to invite other users to a team
  - [ ] New team members should be able to view all projects and tasks available to their new team
- [ ] Allow users to leave a team
  - [ ] Destroy team if team has 0 members, hide team's projects and tasks from the user after a user has left the team.

### Phase 4: Project/Dashboard Components and Sidebar Navigation (2 days)

**Objective:** Projects appear as a list of containers containing the project title and description on a user's dashboard. Projects can be created via a project form. Viewing a project shows a list of tasks.
- [ ] Create `ProjectContainer` React component
- [ ] Create `ProjectIndex` React component
- [ ] Create `ProjectItem` React component
- [ ] Create `Dashboard` React component
- [ ] Clicking a project should show a blank task container with an Add Task button.
- [ ] Sidebar shows a User's team and team members.
  - [ ] Members appear as icons.
  - [ ] Users can invite another user to a team via the sidebar.
  - [ ] Sidebar shows a list of projects (both personal and team), and allows creation of a project from the sidebar.
- [ ] Sidebar has a link to the team's calendar (bonus feature)

### Phase 5: Task Components (1 day)

**Objective:** Task creation, editing, completion, and deletion implemented.
- [ ] Create `TaskContainer` React component
- [ ] Create `TaskIndex` React component
- [ ] Create `TaskItem` React component
- [ ] Create `TaskDetail` React component
- [ ] Users can create tasks while inside a project
- [ ] The task creator can delete a task
- [ ] The task creator can assign a task to a team member
- [ ] Users can mark a task as complete
- [ ] Tasks appear as a list after clicking on a project
- [ ] Clicking on a task in the list shows the task's details and comments (bonus feature)
- [ ] Task titles appear in the Calendar when given a due date (bonus feature)

### Phase 6: Drag and Drop Task functionality (0.5 days)

**objective:** Users should be able to drag tasks from one header to another in the task list.

### Phase 7: - Styling and Cleanup (1 days)

**objective:** Focus on usability by actual humans.
- [ ] Use CSS to cleanly display components
- [ ] Make sure interactive elements have the correct affordances and signifiers
- [ ] Make sure the site's style is consistent
- [ ] Make sure users get immediate feedback following an action
- [ ] User test with friends and classmates

### Bonus Features (TBD)
- [ ] Commenting on Tasks
- [ ] Team Calendar
- [ ] Visualization for Task Completion
