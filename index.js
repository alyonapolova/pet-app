const { Command } = require("commander");
const animalsService = require("./src/modules/animals/services/animalsService");
const program = new Command();

program.name("pet-app").description("Pet app").version("1.0.0");

program
  .command("get-animal")
  .description("Get one or many animals")
  .option("-i, --id <id>", "animal's id")
  .action(async ({ id }) => {
    if (!id) {
      const animals = await animalsService.getAll();
      console.log("Animals were found", animals);
    } else {
      const animal = await animalsService.getOneById(id);
      console.log("Animal was found", animal);
    }
  });

program
  .command("create-animal")
  .description("Create animal")
  .argument("<payload>")
  .action(async (payload) => {
    const animal = await animalsService.create(JSON.parse(payload));
    console.log("create animal", payload);
  });

program
  .command("update-animal")
  .description("Update animal")
  .requiredOption("-i, --id <id>", "animal's id")
  .argument("<payload>")
  .action(async ({ id }, payload) => {
    const updatedAnimal = await animalsService.updateById(id, payload);
    console.log("updated animal", updatedAnimal);
  });

program
  .command("delete-animal")
  .description("Delete animal")
  .requiredOption("-i, --id <id>", "animal's id")
  .action(async ({ id }) => {
    const deletedAnimal = await animalsService.delete(id);
    console.log("delete animal", deletedAnimal);
  });
program.parse(process.argv);
