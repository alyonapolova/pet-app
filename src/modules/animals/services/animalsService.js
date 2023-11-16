const animalRepository = require("../repositories/animalsRepository");
const Animal = require("../models/animal");

class AnimalsService {
  constructor(animalsRepository) {
    this.animalsRepository = animalsRepository;
  }
  async getAll() {
    return await this.animalsRepository.findAll();
  }
  getOneById(id) {}

  async create(payload) {
    const animal = new Animal(payload);
    return await this.animalsRepository.create(animal);
  }
  updateById(id, payload) {}
  delete(id) {}
}

const animalsService = new AnimalsService(animalRepository);
module.exports = animalsService;
