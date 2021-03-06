const express = require("express");
const bodyParser = require("body-parser");
const db = require("./queries");
//const { apiConfig } = require("./config");
const app = express();
const cors = require("cors");
const port = process.env.PORT;
const { generateJWT, authorize } = require("./middleware/auth");

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

app.get("/user/:username", cors(corsOptions), db.checkUsernameExistence);

app.get("/user/profile/:username", cors(corsOptions), db.getUserProfile);

app.get("/user/editprofile/:username", cors(corsOptions), db.getEditProfile);

app.get("/:email", cors(corsOptions), db.checkEmailAvailable);

// ------------------------ POST REQUESTS ---------------------------

app.post("/create-user", cors(corsOptions), (req, res) => {
  db.createUser(req, res).then((user) => {
    if (user) {
      console.log("user was successfully created: ", user);
      const token = generateJWT({ id: user.id, role: user.role });
      res.json(token);
    } else {
      res.send("Unable to create account");
    }
  });
});

app.post("/login", cors(corsOptions), (req, res) => {
  const user = db.checkLogin;
  if (user) {
    const token = generateJWT({ id: user.id, role: user.role });
    res.json(token);
  } else {
    res.send("Username or password incorrect");
  }
});

// ----------------------- UPDATE REQUESTS -------------------------

app.get("/user/profile/:username/edit", cors(corsOptions), db.updateProfile);
