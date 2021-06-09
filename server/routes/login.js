const jwt = require("jsonwebtoken");

const config = require("../config/config");

module.exports = (ctx) => {
  const { username, password } = ctx.request.body;

  if (!username || !password) {
    ctx.status = 403;
    return;
  }

  if (username === "test" && password === "test_password") {
    const token = jwt.sign(
      { username },
      config.SECRET_TOKEN,
      { expiresIn: "3h" }
    );

    ctx.status = 200;
    ctx.body = {
      user: {
        username,
        password
      },
      token
    };

    return;
  }
}