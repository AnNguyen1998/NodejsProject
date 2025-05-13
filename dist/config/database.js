const mongoose = require('mongoose');
const URL_1 = 'mongodb+srv://conandold:1234@livi.rlmtnle.mongodb.net/?retryWrites=true&w=majority&appName=Livi';
const connectDB = async () => {
    try {
        await mongoose.connect(URL_1, {});
        console.log('Connected to mongoDB');
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
};
module.exports = connectDB;
