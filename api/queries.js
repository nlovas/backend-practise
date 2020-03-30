const db = require("./config.js");

const getUsers = (request, response) => {
  db.any("select * from users")
    .then(data => {
      console.log("DATA:", data); // print data;
      response.json(data);
    })
    .catch(error => {
      console.log("ERROR:", error); // print the error;
    })
    .finally(db.$pool.end); // For immediate app exit, shutting down the connection pool
  // For details see: https://github.com/vitaly-t/pg-promise#library-de-initialization
  // response.status(200).json(data);
};

module.exports = {
  getUsers
};
