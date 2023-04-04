const { User } = require('../database').models

const createUser = async (name, email, password) => {
    console.log('Esta en el servicio')
    const newUser = await User.create({
        //name: name - Es lo mismo que el name de abajo. Reconoce el argumento porque es el unico en el archivo.
        name, 
        email,
        password
    })
    return newUser;
}

module.exports = {
    createUser
}