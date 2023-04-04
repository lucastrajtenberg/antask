//const mongoose = require('mongoose'); - En vez de requerir todo el paquete agarras solo la funcion que te interesa. Opt
const { connect, connection} = require('mongoose');

const connectToDatabase = async () => {
    await connect(process.env.MONGODB_URL);
    console.log('Database connected succesfully')
}
const closeDatabase = () => {
    connection.close();
    console.log('Database has been closed')
}

module.exports = {
    connectToDatabase,
    closeDatabase,
    models: {
        Item: require('./models/Item'),
        Task: require('./models/Task'),
        User: require('./models/User')
    }
}