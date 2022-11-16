const {Schema, model} = require('mongoose');
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        unique: true
    },
    tasks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Task'
        }
    ]
});

const userModel = model('User', userSchema)
module.exports = userModel