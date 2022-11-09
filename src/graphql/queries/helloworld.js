const {
    GraphQLObjectType,
    GraphQLString,
} = require('graphql');

const resolve = function(){
    return 'Hello World';
}

const helloWorld = {
    name: 'helloWorld',
    type: GraphQLString,
    description: 'Query for testing the API',
    resolve: resolve
    //resolve: () => 'Hello World!'
}

module.exports = helloWorld;