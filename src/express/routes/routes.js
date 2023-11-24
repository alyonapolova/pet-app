const express = require("express");
const animalController = require("../../modules/animals/controllers");
const routerAnimal = express.Router();

routerAnimal.get("/", animalController.getAnimals);
routerAnimal.get("/:animalId", animalController.getOneAnimal);
routerAnimal.post("/", animalController.createAnimal);
routerAnimal.put("/:animalId", animalController.updateAnimal);

module.exports = routerAnimal;
