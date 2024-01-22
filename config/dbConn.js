const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            // maxPoolSize: 50,
            // wtimeoutMS: 2500
        });
        console.log("MongoDB Connected");
    } catch (err) {
        console.log(err.message);
    }
};

module.exports = connectDB;