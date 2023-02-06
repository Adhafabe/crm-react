const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const conectarDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.DB_MONGO, {
        });
        console.log('Base de datos conectada')
    } catch (error) {
        console.log('Hubo un error');
        console.log(error);
        process.exit(1)//Detiene la app
    }
}

module.exports = conectarDB;
