const {Schema, model} = require('mongoose');
const taskSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    status: {
        type: Boolean,
        default: false
    },
    items: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Item'
        }
    ]
});

const taskModel = model('Task', taskSchema)
module.exports = taskModel