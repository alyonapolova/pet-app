const express = require("express");
const routerAnimal = require("./routes");
const router = express.Router();

router.use("/animals", routerAnimal);

module.exports = router;
