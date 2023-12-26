const path = require("node:path");
const fs = require("node:fs/promises");
const Animal = require("../models/animal");

class AnimalsRepository {
  async findAll(config) {
    const { page, limit, isVaccinated, sortBy, order, minAge } = config;
    const skip = (page - 1) * limit;
    const animals = await Animal.find()
      .where("deletedAt")
      .equals(null)
      .skip(skip)
      .limit(limit);

    const total = await Animal.countDocuments().where("deletedAt").equals(null);

    if (isVaccinated) {
      animals.where("isVaccinated").equals(isVaccinated);
      total.where("isVaccinated").equals(isVaccinated);
    }

    if (minAge) {
      animals.where("age").gte(minAge);
      total.where("age").gte(minAge);
    }

    if (sortBy) {
      animls.sort({
        [sortBy]: order,
      });
    }
    const animalsAll = await animals.exec();
    const totalAnimals = await total.exec();

    return { animalsAll, totalAnimals };
  }

  async findOneById(id) {
    const animal = await Animal.findById(id).where("deletedAt").equals(null);
    return animal;
  }

  async create(payload) {
    const animal = new Animal(payload);
    await animal.save();

    return animal;
  }

  async update(id, payload) {
    const animal = await this.findOneById(id);
    if (!animal) {
      return;
    }

    const updatedAnimal = await Animal.findByIdAndUpdate(id, payload, {
      returnOriginal: false,
    });

    return updatedAnimal;
  }

  async delete(id) {
    const animal = await this.findOneById(id);
    if (!animal) {
      return;
    }
    await Animal.findByIdAndUpdate(id, {
      $set: { deletedAt: new Date() },
    });
    return id;
  }
}

const animalsRepository = new AnimalsRepository();
module.exports = animalsRepository;
