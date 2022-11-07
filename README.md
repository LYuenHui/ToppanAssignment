# Project Title

NodeJS API Asessment

---
## Requirements

For development and testing, you will only need **Node.js** , **MySQL database** and **Postman**(optional), installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v16.15.1

    $ npm --version
    8.18.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###


---

## Install

    $ git clone https://github.com/LYuenHui/ToppanAssignment.git
    $ cd ToppanAssignment
    $ npm install

## Configure config properties

Open `config.js` then edit it with your settings. You will need:

- Port number
- db host
- db user 
- db password

## Running the project

    $ npm start

## Currrent DB Data
    teacherDB
      -marvin@gmail.com
      -rex@gmail.com
      -david@gmail.com
      -teacherken@gmail.com
      -teacherjoe@gmail.com  
    studentDB
      -aaron@gmail.com
      -george@gmail.com
      -jeremy@gmail.com
      -studentjon@gmail.com
      -studenthon@gmail.com
    teacher_studentDB
      -marvin@gmail.com',george@gmail.com
      -marvin@gmail.com,jeremy@gmail.com
      -marvin@gmail.com,aaron@gmail.com
      
## APIs for all user stories
    POST /api/register
    GET /api/commonstudents
    POST /api/suspend
    POST /api/retrievefornotifications
    
## Running the unit test
    $ cd unittest
    $ npm install 
    $ npm test
    
    
