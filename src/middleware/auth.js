// middleware/auth.js

const jwt = require("jsonwebtoken");
const vehicleRentUser = require("../model/User");

const authenticateToken = async (req) => {
  const token = req.headers.get("authorization");
  console.log("token", token);
  if (!token) {
    throw new Error("Access token is missing");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await vehicleRentUser.findById(decoded.id).select("-password");
    if (!user) {
      throw new Error("Invalid token");
    }

    return user;
  } catch (error) {
    throw new Error("Token is not valid: " + error.message);
  }
};

module.exports = authenticateToken;
