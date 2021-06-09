const Koa = require("koa");
const Router = require("koa-router");
const parser = require("koa-bodyparser");

const config = require("./config/config");
const { login } = require("./routes");
const { authenticate } = require("./middlewares");

const app = new Koa();
const router = new Router();

app.use(parser());

router.post("/login", login);

// klientas gali kažko ir prašyti iš serverio...
router.get("/something", authenticate, (ctx) => {
  console.log(ctx);
  ctx.body = {
    status: "Success",
    data: "Hello world"
  };
});

app.use(
  router.routes(),
  router.allowedMethods()
);

app.listen(config.PORT);