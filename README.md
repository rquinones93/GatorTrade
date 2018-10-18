# csc648-fa18-Team04

## Dependencies

1. Node.js

   - [How to Download on Windows](https://blog.teamtreehouse.com/install-node-js-npm-windows)
   - [How to Download on Mac](https://blog.teamtreehouse.com/install-node-js-npm-mac)
   - [How to Download on Linux](https://blog.teamtreehouse.com/install-node-js-npm-linux)

2. Make sure npm is installed.

   ```bash
   npm install
   ```

3. PostgreSQL - [Install PostgreSQL (all OS)](https://www.postgresql.org/download/)

## How to run the project

1. Clone the repository to your local machine
2. Create a .env file in base of the directory, here we will store sensitive data used by the server
3. Open your Terminal or Git Bash, type the following commands.

   ```bash
   # This installs node modules defined in package.json
   npm install
   # Start the server and application
   # Windows
   npm run start:windev
   # Mac or Linux
   npm run start:dev
   ```

4. Once the server is running, visit localhost:3000 on your browser.

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

1. Push your branch's code.
2. Create a new Pull Request.
3. Set the base branch to 'development' and the compare branch to your personal branch.
4. Request Abigail and your team lead to review your code.
5. Request other members to rew your code ( optional ).
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
