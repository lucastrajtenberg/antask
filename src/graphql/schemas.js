const {GraphQLSchema, GraphQLObjectType} = require('graphql')
const QueryType = new GraphQLObjectType({
    name: 'query',
    description: 'Query type, provides all queries required by the API',
    fields: {}
})