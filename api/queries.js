const { db } = require("./config.js");

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

const createUser = (request, response) => {
  console.log(request.body.username);
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
      console.log("data: ", data);
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
};
