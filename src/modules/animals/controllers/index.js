const animalsService = require("../services/animalsService");

class AnimalController {
  constructor(animalsService) {
    this.animalsService = animalsService;
  }
  getAnimals = async (req, res) => {
    const animals = await this.animalsService.getAll();
    res.json({
      status: 200,
      message: "Get animals",
      data: animals,
    });
  };
  getOneAnimal = async (req, res) => {
    const animalId = req.params.animalId;
    const animal = await this.animalsService.getOneById(animalId);
    res.json({
      status: 200,
      message: `Get animal with id ${animalId}`,
      data: animal,
    });
  };
  createAnimal = async (req, res) => {
    const animal = await this.animalsService.create(req.body);
    res.json({
      status: 201,
      message: "Successfully created an animal!",
      data: animal,
    });
  };
  updateAnimal = async (req, res) => {
    const animalId = req.params.animalId;
    const animal = await this.animalsService.updateById(animalId, req.body);
    res.json({
      status: 200,
      message: "Successfully updated an animal!",
      data: animal,
    });
  };

  deleteAnimal = async (req, res) => {
    const animalId = req.params.animalId;
    const animal = await this.animalsService.deleteAnimal(animalId);
    res.json({
      status: 200,
      message: "Successfully deleted an animal!",
      data: animal,
    });
  };
}
const animalController = new AnimalController(animalsService);
module.exports = animalController;
