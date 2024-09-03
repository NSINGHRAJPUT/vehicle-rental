const mongoose = require("mongoose");

let vehicleRentUser;

try {
  vehicleRentUser = mongoose.model("vehicleRentUser");
} catch (error) {
  const vehicleRentUserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    password: { type: String, required: true },
    userType: {
      type: String,
      required: true,
      enum: ["Owner", "Renter"], // Define the two types of users
    },
    createdAt: { type: Date, default: Date.now },
  });

  vehicleRentUser = mongoose.model("vehicleRentUser", vehicleRentUserSchema);
}

module.exports = vehicleRentUser;
