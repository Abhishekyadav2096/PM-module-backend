const mongoose = require("mongoose");
const CONNECTION_STRING =
  "mongodb+srv://abhishekyadav2096:Yadav2006@cluster0.jtdifhy.mongodb.net/?retryWrites=true&w=majority";
const connectDB = async () => {
  try {
    await mongoose.connect(CONNECTION_STRING, {});
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
