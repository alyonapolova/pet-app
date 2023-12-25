const animalRepository = require("../repositories/animalsRepository");
const Animal = require("../models/animal");
const HttpError = require("../../common/HttpError");
class AnimalsService {
  constructor(animalsRepository) {
    this.animalsRepository = animalsRepository;
  }
  async getAll() {
    return await this.animalsRepository.findAll();
  }
  async getOneById(id) {
    const animal = await this.animalsRepository.findOneById(id);
    if (!animal) {
      throw new HttpError(404, "Animal is not found");
    }
    return animal;
  }

  async create(payload) {
    const animal = new Animal(payload);
    return await this.animalsRepository.create(animal);
  }

  async updateById(id, payload) {
    return await this.animalsRepository.update(id, payload);
  }

  async deleteAnimal(id) {
    return await this.animalsRepository.delete(id);
  }
}

const animalsService = new AnimalsService(animalRepository);
module.exports = animalsService;
