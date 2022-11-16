const userService = require('../services/user')

const createUser = async (args) => {
    console.log('Esta en el controlador', args)
    const { name, email, password } = args
    if(password.length < 4)
        throw new Error('Password length is too short')  
    if(!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g))
        throw new Error('Email not valid')
    const response = await userService.createUser(name, email, password)
    console.log(response)
}

module.exports = {
    createUser
}