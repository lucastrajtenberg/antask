//require modules
const app = require('./app')

//setting up
async function main() {
    const port = app.get('port');
    await app.listen(port);
    console.log('Server on port', port);
} 

main();