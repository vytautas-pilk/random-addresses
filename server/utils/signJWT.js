const jwt = require("jsonwebtoken");

const config = require("../config/config");

module.exports = function signJWT(username) {
  const token = jwt.sign(
    { username },
    config.SECRET_TOKEN,
    { expiresIn: "3h" }
  );

  return token;
}