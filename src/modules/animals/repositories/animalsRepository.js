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

  findOneById() {}

  async create(animal) {
    const db = await this.readDBFile();
    db.animals.push(animal);
    await this.writeDBFile(db);
    return animal;
  }
}

const animalsRepository = new AnimalsRepository();
module.exports = animalsRepository;
