const { GraphQLString, GraphQLBoolean, GraphQLNonNull } = require('graphql');
const { createUser } = require('../../controllers/user.controller')

const args = {
    name: {
        type: new GraphQLNonNull(GraphQLString),
    },
    email: {
        type: new GraphQLNonNull(GraphQLString),
    },
    password: {
        type: new GraphQLNonNull(GraphQLString),
    }
}
const resolve = async function(_parent, args){ //arg parent se usa para datos del objeto padre de esta mutacion. con _ ignoras el argumentoa mutacion')
    try{
        await createUser(args)
    }catch(error){
        console.log(error)
        throw new Error('Cannot create the user')
    }
    return true;
}

const newUser = {
    name: 'newUser',
    type: GraphQLBoolean,
    description: 'Mutation for creating a new user',
    args,
    resolve
    //resolve: () => 'Hello World!'
}

module.exports = newUser;