const express = require('express');
const cors = require("cors");
const app = express();
const errorMiddleware = require("./middlewares/error");
const cookieParser = require('cookie-parser');


//cors
//app.use(cors());

// // Enable CORS
// app.use(cors({
//   origin: "https://blood-and-stem-cell-donation-platfo.vercel.app", // Frontend's URL (adjust as needed)
//   credentials: true, // Allow cookies to be sent with cross-origin requests
// }));

// Enable CORS...........RECENTLY ADDED ON 25TH JULY
app.use(cors({
  origin: ["http://localhost:3000","https://blood-and-stem-cell-donation-platfo-lake.vercel.app"],// Frontend's URL (adjust as needed)
  credentials: true, // Allow cookies to be sent with cross-origin requests
}));



// Disable ETag
// app.disable("etag");

//json
app.use(express.json());
app.use(cookieParser());


//RECENTLY COMMENTED ON 25TH JULY
app.get('/', (req, res) => {
  res.status(200).json({ message: "Backend server is working properly!" });
});


//Route Imports
const user = require("./routes/donorRoutes");
const hospital = require("./routes/hospitalRoutes");
const admin = require("./routes/adminRoutes");
app.use("/api/v1", user);
app.use("/api/v1", hospital);
app.use("/api/v1", admin);

//Middleware for Errors
app.use(errorMiddleware);

module.exports = app;