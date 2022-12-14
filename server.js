// TO CUSTOMIZE OUR NEXT ROUTES

const { createServer } = require("http");
const next = require("next");
//to keep a check that whether the app is running on a production mode or not
const app = next({
  dev: process.env.NODE_ENV !== "production",
});

const routes = require("./routes");
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  createServer(handler).listen(3000, (err) => {
    if (err) throw err;
    console.log("Ready on localhost:3000");
  });
});
