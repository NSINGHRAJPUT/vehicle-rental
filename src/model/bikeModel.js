const mongoose = require("mongoose");

const bikeSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  type: { type: String, required: true },
  engine: { type: String, required: true },
  power: { type: String, required: true },
  torque: { type: String, required: true },
  displacement: { type: String, required: true },
  cooling: { type: String, required: true },
  fuel_system: { type: String, required: true },
  fuel_capacity: { type: String, required: true },
  transmission: { type: String, required: true },
  gearbox: { type: String, required: true },
  front_brakes: { type: String, required: true },
  rear_brakes: { type: String, required: true },
  front_suspension: { type: String, required: true },
  rear_suspension: { type: String, required: true },
  front_tire: { type: String, required: true },
  rear_tire: { type: String, required: true },
  seat_height: { type: String, required: true },
  ground_clearance: { type: String, required: true },
  total_length: { type: String, required: true },
  total_width: { type: String, required: true },
  total_height: { type: String, required: true },
  wheelbase: { type: String, required: true },
  bore_stroke: { type: String, required: true },
  compression: { type: String, required: true },
  frame: { type: String, required: true },
  clutch: { type: String, required: true },
  ignition: { type: String, required: true },
  lubrication: { type: String, required: true },
  valves_per_cylinder: { type: String, required: true },
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
