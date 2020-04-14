const { db } = require("./config.js");

// ------------------ GET REQUESTS ---------------------------------------

/*
Returns a list of all users -- TODO either remove this or change *
*/
const getUsers = (request, response) => {
  db.any("select * from users")
    .then((data) => {
      console.log("DATA:", data); // print data;
      response.json(data);
    })
    .catch((error) => {
      console.log("ERROR:", error); // print the error;
    });
  //.finally(db.$pool.end); // For immediate app exit, shutting down the connection pool
  // For details see: https://github.com/vitaly-t/pg-promise#library-de-initialization
  // response.status(200).json(data);
};

/*
Returns true/false if a user exists with this username
*/
const checkExistence = (request, response) => {
  console.log(request.params);
  db.any("select id from users where username = $1", [request.params.username])
    .then((data) => {
      console.log("DATA: ", data);
      if (data.length > 0) {
        response.json("true");
      } else {
        response.json("false");
      }
    })
    .catch((error) => {
      console.log("An error occurred: ", error);
      response.status(500).json(error);
    });
};

// ----------------- POST REQUESTS -------------------------------

/*
Create a new user in the DB
*/
const createUser = (request, response) => {
  db.any(
    "insert into users (username, password, email, admin) values ($1,$2,$3,$4)",
    [
      request.body.username,
      request.body.password,
      request.body.email,
      request.body.admin,
    ]
  )
    .then((data) => {
      response.sendStatus(200);
    })
    .catch((error) => {
      console.log("there was an error: ", error);
      response.status(500).json(error);
    });
  //.finally(db.$pool.end);
  //response.send(request.body.username);
};

module.exports = {
  getUsers,
  createUser,
  checkExistence,
};
