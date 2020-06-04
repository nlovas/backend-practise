const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/*
Anything authorization related goes in this middleware
*/

/*
Create a JWT for a user
TODO: provide different tokens for when the user is logged in on different devices
so logging off of one doesn't log off of all
*/
const generateJWT = async (username) => {
  const token = jwt.sign(username, process.env.JWT_KEY, { expiresIn: "8h" });
  return token;
};

/*
Check the token for authorization
look at https://medium.com/swlh/jwt-authentication-authorization-in-nodejs-express-mongodb-rest-apis-2019-ad14ec818122
and https://medium.com/better-programming/a-practical-guide-for-jwt-authentication-using-nodejs-and-express-d48369e7e6d4
https://stormpath.com/blog/where-to-store-your-jwts-cookies-vs-html5-web-storage
https://stackabuse.com/authentication-and-authorization-with-jwts-in-express-js/
*/
const authorize = async (request, response, next) => {
  const token = request.header("Authorization").replace("Bearer ", "");
  if (token === null) {
    console.log("no jwt");
  }
  const data = jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
    if (err) {
      return response.sendStatus(403);
    }
    console.log(decoded);
    next();
  });
};

module.exports = {
  generateJWT,
  authorize,
};
