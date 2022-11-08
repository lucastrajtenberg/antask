//required modules
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const {graphqlHTTP} = require('express-graphql');

//setting up
const app = express();
const logger = morgan('dev');
const corsinstance = cors();
const port = process.env.PORT || 3000;
app.set('port', port);

//middleware
app.use(logger);
app.use(corsinstance);

app.use('/', (req, res) => {
    res.send('Hello World');
});

app.use('/graphql', graphqlHTTP({
    //schema: {},
    graphiql: true //shows the graphql interface
}));

//module.exports allows you to export a variable or function
module.exports = app;