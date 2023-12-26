const { Schema, default: mongoose } = require("mongoose");

const animalSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    isVaccinated: { type: Boolean, default: false },
    gender: { type: String, enum: ["male", "female"], required: true },
    species: { type: String, required: true },
    deletedAt: { type: Date, default: null },
  },
  { versionKey: false, timestamps: true }
);

const Animal = mongoose.model("animal", animalSchema);

module.exports = Animal;
