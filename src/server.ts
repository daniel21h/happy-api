import express from "express";

import "./database/connection";

const server = express();

server.use(express.json());

server.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

server.listen(3333, () => {
  console.log("🙃 Server running on port 3333.");
});
