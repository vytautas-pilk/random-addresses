const jwt = require('jsonwebtoken');

const config = require('../config/config');

module.exports = function authenticate(ctx, next) {
  const authHeader = ctx.headers.authorization;
  const token = authHeader?.split(" ")[1];

  const decoded = jwt.decode(token, { complete: true });

  const verifyOptions = {
    algorithms: ['HS256'],
    header: decoded.header,
  };

  if (token === undefined) {
    ctx.status = 401;
    return;
  }

  jwt.verify(token, config.SECRET_TOKEN, verifyOptions, (err, user) => {
    if (err) {
      console.log(err);
      ctx.status = 403;
      return;
    }

    console.log(user);
    ctx.request.user = user;
    next();
  });
}