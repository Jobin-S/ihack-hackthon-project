const mongoose = require("mongoose");


let MONGO_URI = process.env.MONGO_URI;


exports.connect = () => {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DATABASE CONNECTED SUCCESSFULLY");
    })
    .catch((e) => {
      console.log("DB CONNECTION FAILED");
      console.log(e);
      process.exit(1);
    });
};
