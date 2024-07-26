require('dotenv').config();
const mongoose = require('mongoose');

const mongouri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lomwrpf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


const connectTomongo = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(mongouri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log("Connected successfully");
  } catch (err) {
    console.error("Error connecting to MongoDB");
    
    console.error(err);
  }
};
module.exports = connectTomongo;

