require('dotenv').config();

const express = require('express');    // To import express
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const PORT = process.env.PORT || 3500;
 

// const whiteList = ['https://comfy-concha-9de592.netlify.app','http://127.0.0.1:3801','http://localhost:3801', 'http://127.0.0.1:3500'];       
// const corsOptions = {
//     origin: (origin,callback) => {
//         if(whiteList.indexOf(origin) !== -1 || !origin){     // it is whiteList
//             callback(null, true);           // the origin is allowed
//         }
//         else {
//             callback(new Error('Not allowed to CORS'));
//         }
//     },
//     optionsSuccessStatus: 200
// }


connectDB();         // Connect to DB   

app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.send("Welcome to API");
});

app.use("/reviews", require('./routes/api/reviews'));          // stating the version of the api (v1) if we change it later so specifying

app.use("*", (req, res) => {
    res.status(404).json({ error: "Not Found"});
})

mongoose.connection.once('open', () => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Port listening on ${PORT}`));
})