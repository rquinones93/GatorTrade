# csc648-fa18-Team04

## Dependencies

1. Node.js

   - [Download on Windows](https://blog.teamtreehouse.com/install-node-js-npm-windows)
   - [Download on Mac](https://blog.teamtreehouse.com/install-node-js-npm-mac)
   - [Download on Linux](https://blog.teamtreehouse.com/install-node-js-npm-linux)

2. Make sure npm is installed.

   ```bash
   npm install
   ```

3. PostgreSQL - [Install PostgreSQL (all OS)](https://www.postgresql.org/download/)

4. PostgrSQL Clients (Choose One)
   - All OS - [pgAdmin](https://www.pgadmin.org/download/)
   - Mac - [Postico](https://eggerapps.at/postico/)

## Initial Setup of Local PostgreSQL Database

### Important: Make sure you've cloned the project & PostgreSQL Server is running before proceeding.

- [Windows - Using pgAdmin - Video Tutorial](https://youtu.be/EBw5E5DzAvE?t=185)
  - Note: Create a new database called `gator_trade`. You should be finished by 5:00 in the video.
- Mac & Linux - Open your Terminal, type the following commands.

  ```bash
  # Make sure psql is already installed
  # psql Create Database Command
  createdb gator_trade
  ```

- All Operating Systems

  - Open the project in an editor and from the base of the directory, create a file named `.env`.
  - Within `.env` paste the following `DATABASE_URL=postgres://whoami@localhost:5432/gator_trade`.
    - Note: `whoami` is the output of the Unix `whoami` command.
    - Note: If you created a username & password from the Windows tutorial, substitute `username:password` for `whoami`.
  - Save `.env`.
    - This environment file will be referenced both in the local project and by Heroku. This file will hold unique, secret values that should not be shared. The `.gitignore` file stops the `.env` file from being pushed to GitHub.

### Setup will be completed in next section

## How to run the project

1. Clone the repository to your local machine.
2. Setup local PostgreSQL database (see previous section.)
3. Open your Terminal or Git Bash, from the project's directory, and type the following commands.

   ```bash
   # This installs node modules defined in package.json
   npm install

   # Run Sequelize Migrations to finish database setup
   # This will create tables in gator_trade DB and make defined key associations
   npm run db:migrate

   # Start the server and application
    # On Windows
   npm run start:windev
    # On Mac or Linux
   npm run start:dev
   ```

4. Once the server is running, visit `localhost:3000` from your browser.

## Rules for Branching

In order to have a consistent flow with developer branches we need to implement a naming convention on new branches, as well as a step by step approach to merging and pull requests.

### Branch Naming Convention

```bash
developerName(FE/BE)featureName

# Front End Example
dhruvFEsignUpForm

# Backend Example
robertBEuserRegistration
```

### Merging and Pull Requests

1. Push your branch's code to GitHub.
2. Create a new Pull Request.
3. Set the base branch to 'development' and the compare branch to your personal branch.
4. Request Abigail and a Frontend or Backend Lead to review your code.
5. (Optional) Request other members to review your code.
6. After review, all Team Leads will ensure development branch runs smoothly.
7. If there are no problems, the development branch will be merged into the master branch.
8. Robert will then push changes to the live server.

## Development Team

1. [Abigail - Team Lead](https://github.com/michinchin)
2. [Alyssa - Front End Developer](https://github.com/amalunao)
3. [Dhruv - Front End Lead](https://github.com/dhruvbshah)
4. [Jarek - Back End Developer](https://github.com/Janda95)
5. [Jed - Front End Developer](https://github.com/jahmadia)
6. [Nikita - Front End Developer](https://github.com/nbajra)
7. [Robert - Back End Lead](https://github.com/rquinones93)

README Maintainer- Robert
