const mongoose = require("mongoose");

const bikeSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  type: { type: String, required: true },
  transmission: { type: String, required: true },
  image: { type: String, required: false },
  starter: { type: String, required: true },
  price: { type: Number, required: true }, // Assuming this is the daily rental price
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "vehicleRentUser",
    required: true,
  },
  rented: {
    type: Boolean,
    default: false,
  },
});

const Bike = mongoose.models.Bike || mongoose.model("Bike", bikeSchema);

module.exports = Bike;
