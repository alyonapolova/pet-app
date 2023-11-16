const animalRepository = require("../repositories/animalsRepository");
const Animal = require("../models/animal");

class AnimalsService {
  constructor(animalsRepository) {
    this.animalsRepository = animalsRepository;
  }
  async getAll() {
    return await this.animalsRepository.findAll();
  }
  async getOneById(id) {
    return await this.animalsRepository.findOneById(id);
  }

  async create(payload) {
    const animal = new Animal(payload);
    return await this.animalsRepository.create(animal);
  }

  async updateById(id, payload) {
    return await this.animalsRepository.update(id, {
      name,
      age,
      isVaccinated,
      gender,
      species,
    });
  }

  async delete(id) {
    return await this.animalsRepository.delete(id);
  }
}

const animalsService = new AnimalsService(animalRepository);
module.exports = animalsService;
