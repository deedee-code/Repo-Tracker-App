# Repo Tracker App

A tracking app that tracks every person that checks out this repo and their activities. This app tracks the activities of a user when they push, star, make a pull request, add collaborators, deploy, fork, add a team member.

## Install & Run the code

- Clone this repo: https://github.com/deedee-code/Repo-Tracker-App.git
- cd Repo-Tracker-App
- npm install
- npm run start

## Requirement

- Nodejs
- Mongoose
- GitHub
- Ngrok
- Postman

## The Process

I started by setting up an express server to handle incoming requests and routes. Then I set up a GitHub webhook for this repo, then enter my server payload url(ngrok url) and the events i will like my app to track. After which I set up a mongoose database to store the track activities.

- #### Setting up the Environment Variables (.env file)

```
- PORT='your-port-number'
- MONGO_URI='your-mongoose-uri'
```

- #### APIEndpoint

```
- POST /api/v1/activities: An endpoint that receive information from the GitHub webhook to get the activities of a specific user.
- GET /api/v1/activities: An endpoint that lists all the activities recorded in the database.
- GET /api/v1/activities/:id: An endpoint that lists the activities of a specific user by id.
- GET /api/v1/activities/username/:username: An endpoint that lists the activities of a specific user by username.
```

### Thank you
