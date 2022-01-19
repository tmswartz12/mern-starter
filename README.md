# mern-starter

Welcome to Tyler's mern-starter repository.

# Pre requisites
- npm & node must be installed on your machine `brew update` `brew install node`
- mongodb must be running locally on your machine
`brew tap mongodb/brew`
`brew install mongodb-community`



# Quickstart

- install packages by running `npm install`
- make sure mongodb is up and running `brew services start mongodb-community`
- spin up local dev environment by running `npm run start-dev`



# Deployment
- make sure heroku is installed `brew tap heroku/brew && brew install heroku`

- login to heroku `heroku login`
- Add a git remote for heroku:
  - If you are creating a new app... `heroku create` or `heroku create your-app-name` if you have a name in mind.
  - If you already have an app... `heroku git:remote your-app-name` You'll need to be a collaborator on the app.
  
  
# Dependencies
- Front End
  - React
  - [EasyPeasy (wrapper of Redux)](https://easy-peasy.vercel.app/docs/tutorials/typescript.html)
- Back End
  - Node
  - Express
  - MongoDB
