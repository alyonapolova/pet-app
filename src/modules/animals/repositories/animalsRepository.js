const path = require("node:path");
const fs = require("node:fs/promises");

class AnimalsRepository {
  dbPath = path.join(process.cwd(), "db.json");

  async readDBFile() {
    const content = await fs.readFile(this.dbPath);
    const entries = JSON.parse(content.toString());
    return entries;
  }
  async writeDBFile(db) {
    const string = JSON.stringify(db, null, 2);
    await fs.writeFile(this.dbPath, string);
  }

  async findAll() {
    const db = await this.readDBFile();
    return db.animals;
  }

  async findOneById(id) {
    const db = await this.readDBFile();
    const animal = db.animals.find((item) => item.id === id);
    return animal;
  }

  async create(animal) {
    const db = await this.readDBFile();
    db.animals.push(animal);
    await this.writeDBFile(db);
    return animal;
  }

  async update(id, payload) {
    const animal = await this.findOneById(id);
    if (!animal) {
      return;
    }

    const db = await this.readDBFile();
    const index = db.animals.findIndex((item) => item.id === id);
    console.log("index", index);
    if (index === -1) {
      return null;
    }

    const updatedAnimal = { ...db.animals[index], ...payload };
    console.log("updatedAnimal"), updatedAnimal;
    await this.writeDBFile(db);

    return updatedAnimal;
  }

  async delete(id) {
    const db = await this.readDBFile();
    const filteredAnimals = db.animals.filter((item) => item.id !== id);

    db.animals = filteredAnimals;
    await this.writeDBFile(db);
    return id;
  }
}

const animalsRepository = new AnimalsRepository();
module.exports = animalsRepository;
