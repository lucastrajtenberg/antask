const {connectToDatabase} = require('./database')
//require modules
const app = require('./app')
const dotenv = require('dotenv')
//setting up
async function main() {
    dotenv.config()
    await connectToDatabase()
    const port = app.get('port');
    await app.listen(port);
    console.log('Server on port', port);
} 

main();