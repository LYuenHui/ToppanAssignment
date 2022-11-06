import express from "express";
import bodyParser from "body-parser";
import routes from "./route/route.js";

function createServer() {
  const app = express();
  app.use(bodyParser.json());
  app.use("/api", routes);

  return app;
}

export default createServer;
