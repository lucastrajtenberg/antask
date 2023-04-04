const {connectToDatabase} = require('./database')
//require modules
const app = require('./app')
const dotenv = require('dotenv')
//setting up
async function main() {
    dotenv.config()
    try {
        await connectToDatabase()   
    }
    catch (error){
        throw new Error(`Error while connecting to database. Error: ${error}`) //concatenar texto solo se puede hacer con comillas invertidas: `texto ${jose}`
    }
    const port = app.get('port');
    await app.listen(port);
    console.log('Server on port', port);
} 

main();