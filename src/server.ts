import express from "express";
import { getRepository } from "typeorm";
import Orphanage from "./models/Orphanage";

import "./database/connection";

const server = express();

server.use(express.json());

server.post("/orphanages", async (request, response) => {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  } = request.body;
  const orphanagesRepository = getRepository(Orphanage);

  const orphanage = orphanagesRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  });

  await orphanagesRepository.save(orphanage);

  return response.json(orphanage);
});

server.listen(3333, () => {
  console.log("🙃 Server running on port 3333.");
});
