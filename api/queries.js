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
      console.log("checkusernameexistence An error occurred: ", error);
      response.status(500).json(error);
    });
};

/*
Get a user's profile information. 
Returns username and everything for that user from the profiles table that can be seen by another user
*/
const getUserProfile = (request, response) => {
  console.log("username? ", request.params.username);
  db.one(
    "select username, datecreated, description, encode(avatar,'base64') as avatar, location, showdatecreated from users, profiles where users.id = profiles.id and users.username = lower($1)",
    [request.params.username]
  )
    .then((data) => {
      console.log("data returned: ", data);
      response.json(data);
    })
    .catch((error) => {
      console.log("getuserprofile An error occurred: ", error);
      response.status(500).json(error);
    });
};

/*
Get a user's profile information. 
Returns username and everything for that user from the profiles table needed to edit profile
*/
const getEditProfile = (request, response) => {
  console.log("username? ", request.params.username);
  db.one(
    "select username, email, datecreated, description, encode(avatar,'base64') as avatar, location, showdatecreated namechanges from users, profiles where users.id = profiles.id and users.username = lower($1)",
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
      console.log("checkemailavailable An error occurred: ", error);
      response.status(500).json(error);
    });
};

// ----------------- POST REQUESTS -------------------------------

/*
Create a new user in the DB
Also creates a corresponding row in the profiles table
*/
const createUser = (request, response) => {
  return new Promise((res, rej) => {
    db.tx((t) => {
      return t
        .one(
          "insert into users (username, password, email, admin, datecreated) values (lower($1),$2,lower($3),$4,$5) returning id, admin",
          [
            request.body.username,
            request.body.password,
            request.body.email,
            request.body.admin,
            new Date(),
          ]
        )
        .then((user) => {
          return t.one(
            "insert into profiles (id, description, avatar, location, showdatecreated, namechanges) values ($1,$2,$3,$4,$5,$6) returning id",
            [user.id, "", "", "", true, 0]
          );
        });
    })
      .then((userData) => {
        //return the user id (might change to username later) and role
        console.log("user data? ", userData);
        // return { id: userData.id, role: request.body.admin };
        res({ id: userData.id, role: request.body.admin });
      })
      .catch((error) => {
        console.log("createuser there was an error: ", error);
        return;
        // response.status(500).json(error);
      });
  });
  //.finally(db.$pool.end);
  //response.send(request.body.username);
};

/*
returns user info for JWT if the password and username match
TODO: update security on this
*/
const checkLogin = (request, response) => {
  console.log(request.params);
  db.oneOrNone(
    "select id, admin from users where username = $1 and password = $2",
    [request.body.username, request.body.password]
  )
    .then((data) => {
      return {
        id: data.id,
        role: data.admin,
      };
    })
    .catch((error) => {
      console.log("checklogin An error occurred: ", error);
      response.status(500).json(error);
    });
};

// ----------------------- UPDATE REQUESTS ------------------------------

/*
The user is editing their profile
Any of the following might be changed in the process:
Username, password, email, description, avatar, location
*/
const updateProfile = (request, response) => {};

module.exports = {
  getUsers,
  createUser,
  checkUsernameExistence,
  checkEmailAvailable,
  checkLogin,
  getUserProfile,
  getEditProfile,
  updateProfile,
};
