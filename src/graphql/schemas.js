const { helloWorld } = require ('./queries')
const { newUser } = require ('./mutations')
const {GraphQLSchema, GraphQLObjectType} = require('graphql')

const QueryType = new GraphQLObjectType({
    name: 'query',
    description: 'Query type, provides all queries required by the API',
    fields: {
        helloWorld
    }
})
const MutationType = new GraphQLObjectType({
    name: 'mutation',
    description: 'Mutation type, provides all mutations required by the API',
    fields: {
        newUser
    }
})
const schema = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
})
module.exports = schema;