const express = require("express");
const animalController = require("../../modules/animals/controllers");
const createAnimalSchema = require("../../modules/animals/validationSchemas/createAnimal");
const errorWrapper = require("../../modules/common/utils/errorWrapper");
const validate = require("../middlewares/validate");
const routerAnimal = express.Router();

routerAnimal.get("/", errorWrapper(animalController.getAnimals));
routerAnimal.get("/:animalId", errorWrapper(animalController.getOneAnimal));
routerAnimal.post(
  "/",
  validate(createAnimalSchema),
  errorWrapper(animalController.createAnimal)
);
routerAnimal.put("/:animalId", errorWrapper(animalController.updateAnimal));
routerAnimal.delete("/:animalId", errorWrapper(animalController.deleteAnimal));
module.exports = routerAnimal;
