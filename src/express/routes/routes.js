const express = require("express");
const animalController = require("../../modules/animals/controllers");
const createAnimalSchema = require("../../modules/animals/validationSchemas/createAnimal");
const validate = require("../middlewares/validate");
const routerAnimal = express.Router();

routerAnimal.get("/", animalController.getAnimals);
routerAnimal.get("/:animalId", animalController.getOneAnimal);
routerAnimal.post(
  "/",
  validate(createAnimalSchema),
  animalController.createAnimal
);
routerAnimal.put("/:animalId", animalController.updateAnimal);
routerAnimal.delete("/:animalId", animalController.deleteAnimal);
module.exports = routerAnimal;
