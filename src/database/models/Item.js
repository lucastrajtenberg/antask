const {Schema, model} = require('mongoose');
const itemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: false
    }
});

const itemModel = model('Item', itemSchema)
module.exports = itemModel