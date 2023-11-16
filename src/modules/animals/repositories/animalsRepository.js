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
    const db = await this.readDBFile();
    const index = db.animals.findIndex((item) => item.id === id);
    console.log("index", index);
    if (index === -1) {
      return null;
    }
    console.log("db.animals"), db.animals;
    db.animals[index] = { id, ...payload };
    await this.writeDBFile(db);
    console.log("Updating animal with ID:", id);
    console.log("Update payload:", payload);
    return db.animals[index];
  }

  async delete(id) {
    const db = await this.readDBFile();
    const index = db.animals.findIndex((item) => item.id === id);
    if (index === -1) {
      return null;
    }
    const [result] = db.animals.splice(index, 1);
    await this.writeDBFile(db);
    return result;
  }
}

const animalsRepository = new AnimalsRepository();
module.exports = animalsRepository;
