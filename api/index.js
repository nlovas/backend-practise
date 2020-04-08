const express = require("express");
const bodyParser = require("body-parser");
const db = require("./queries");
const { apiConfig } = require("./config");
const app = express();
const cors = require("cors");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors({ origin: "http://localhost:3000" })); //only allow cors requests from here
app.options("*", cors()); // enable cors preflight across the board

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/users", db.getUsers);
app.post("/create-user", db.createUser);

// sets port from config file to default unless otherwise specified with env variables
//port setting problem solved (https://stackoverflow.com/a/18024792) by SO user Ehevutov (https://stackoverflow.com/users/183835/ehevutov)
app.set("port", process.env.PORT || apiConfig.port);

app.listen(app.get("port"), () => {
  console.log(`App running on port ${app.get("port")}.`);
});
