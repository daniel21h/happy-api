import express from "express";
import path from "path";
import cors from "cors";
import "express-async-errors";

import "./database/connection";

import routes from "./routes";
import errorHandler from "./config/errors/handler";

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);
server.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
server.use(errorHandler);

server.listen(3333, () => {
  console.log("🙃 Server running on port 3333.");
});
