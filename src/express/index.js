const e = require("express");
const express = require("express");
const { nanoid } = require("nanoid");
const router = require("./routes");

const app = express();

app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  const id = nanoid();
  req.id = id;
  next();
});
app.use(router);

app.get("/health", (req, res) => {
  console.log(req.id);
  res.send({ status: 200, message: "Server is running" });
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
