require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

// database connection
require("./config/database").connect();

// creating express app
const app = express();

// middlewares
app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.get('/', (req, res) => {
    res.send('Just marvellous')
})




const port = 5000
app.listen(port, () => {
  console.log(`SERVER STARTED AT http://localhost:${port} ...`)
})