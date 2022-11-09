const mongoose = require('mongoose');

const connectToDatabase = async () => {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('Database connected succesfully')
}

module.exports = {
    connectToDatabase,
}