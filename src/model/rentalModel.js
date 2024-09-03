const mongoose = require("mongoose");

const rentalSchema = new mongoose.Schema({
  vehicle: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: "vehicleType",
  },
  vehicleType: {
    type: String,
    required: true,
    enum: ["Bike", "Car"],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "vehicleRentUser",
    required: true,
  },
  rentalStartDate: {
    type: Date,
    required: true,
  },
  rentalEndDate: {
    type: Date,
    required: true,
  },
  payment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Payment",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Rental = mongoose.models.Rental || mongoose.model("Rental", rentalSchema);

module.exports = Rental;
