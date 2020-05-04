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
const checkUsernameExistence = (request, response) => {
  console.log("checking username existance");
  db.oneOrNone("select id from users where username = lower($1)", [
    request.params.username,
  ])
    .then((data) => {
      if (data) {
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

/*
Get a user's profile information. Returns username and everything for that user from the profiles table
*/
const getUserProfile = (request, response) => {
  console.log("username? ", request.params.username);
  db.one(
    "select username, datecreated, description, encode(avatar,'base64') as avatar, country, showdatecreated, namechanges from users, profiles where users.id = profiles.id and users.username = lower($1)",
    [request.params.username]
  )
    .then((data) => {
      console.log("data returned: ", data);
      response.json(data);
    })
    .catch((error) => {
      console.log("An error occurred: ", error);
      response.status(500).json(error);
    });
};

/*
returns true/false is an email has already been registered
*/
const checkEmailAvailable = (request, response) => {
  console.log(request.params);
  db.oneOrNone("select id from users where email = lower($1)", [
    request.params.email,
  ])
    .then((data) => {
      if (data) {
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
Also creates a corresponding row in the profiles table
*/
const createUser = (request, response) => {
  db.tx((t) => {
    return t
      .one(
        "insert into users (username, password, email, admin, datecreated) values (lower($1),$2,lower($3),$4,$5) returning id",
        [
          request.body.username,
          request.body.password,
          request.body.email,
          request.body.admin,
          new Date(),
        ]
      )
      .then((user) => {
        return t.none(
          "insert into profiles (id, description, avatar, country, showdatecreated, namechanges) values ($1,$2,$3,$4,$5,$6)",
          [user.id, "", "", "", true, 0]
        );
      });
  })
    .then(() => {
      //response.sendStatus(200);
      response.status(200);
      response.json(request.body.username.toLowerCase());
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
  checkUsernameExistence,
  checkEmailAvailable,
  getUserProfile,
};
