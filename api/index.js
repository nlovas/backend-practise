const express = require("express");
const bodyParser = require("body-parser");
const db = require("./queries");
//const { apiConfig } = require("./config");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const port = process.env.PORT;

/*
Where i left off:
JWT: https://jwt.io/introduction/
Trying to decide how to do authentication. A lot of websites are trying to peddle their product.
This one doesnt use passport:
https://medium.com/swlh/jwt-authentication-authorization-in-nodejs-express-mongodb-rest-apis-2019-ad14ec818122
look into passport more to use JWT!!
Probably need to uninstall some of the things u downloaded from https://medium.com/@timtamimi/getting-started-with-authentication-in-node-js-with-passport-and-postgresql-2219664b568c
This one doesnt use passport:
https://medium.com/quick-code/handling-authentication-and-authorization-with-node-7f9548fedde8
This one doesnt use passport, not sure when it was written:
https://www.toptal.com/nodejs/secure-rest-api-in-nodejs
research passport a bit more, seems like itd be best if i needed oAuth tho
*/

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//for CORS
const corsOptions = {
  origin: "http://localhost:3000",
};

//preflight CORS
app.options("*", cors(corsOptions));

//app.options("*", cors({ origin: "http://localhost:3000" })); // enable cors preflight across the board
/*app.options("*", function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.end();
});*/

//app.use(cors({ origin: "http://localhost:3000" })); //only allow cors requests from here

// sets port from config file to default unless otherwise specified with env variables
//port setting problem solved (https://stackoverflow.com/a/18024792) by SO user Ehevutov (https://stackoverflow.com/users/183835/ehevutov)
//app.set("port", process.env.PORT || apiConfig.port);

//app.listen(app.get("port"), () => {
app.listen(port, () => {
  console.log(`App running on port ${port}`); //${app.get("port")}.`);
});

// ----------------------- GET REQUESTS ---------------------------

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/users", cors(corsOptions), db.getUsers);

app.get("/login", cors(corsOptions), db.checkLogin);

app.get("/user/:username", cors(corsOptions), db.checkUsernameExistence);

app.get("/user/profile/:username", cors(corsOptions), db.getUserProfile);

app.get("/user/editprofile/:username", cors(corsOptions), db.getEditProfile);

app.get("/:email", cors(corsOptions), db.checkEmailAvailable);

// ------------------------ POST REQUESTS ---------------------------

app.post("/create-user", cors(corsOptions), db.createUser);

// ----------------------- UPDATE REQUESTS -------------------------

app.get("/user/profile/:username/edit", cors(corsOptions), db.updateProfile);
