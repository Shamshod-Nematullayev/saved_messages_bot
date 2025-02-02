const { default: mongoose } = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongo success");
  } catch (error) {
    console.log("Error to connect DB");
    throw error.message;
  }
}

module.exports = { connectDB };
