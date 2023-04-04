//required modules
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const nodemon = require('nodemon')
const {graphqlHTTP} = require('express-graphql');
const schema = require('./graphql/schemas');

//setting up
const app = express();
const logger = morgan('dev');
const corsinstance = cors();
const port = process.env.PORT || 3000;
app.set('port', port);

//middleware
app.use(logger);
app.use(corsinstance);
app.use(nodemon);

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

//routers
const indexRouter = require('./routes/index')
const tasksRouter = require('./routes/tasks')

app.use('/', indexRouter);
app.use('/tasks', tasksRouter);

//module.exports allows you to export a variable or function
module.exports = app;