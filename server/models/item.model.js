const mongoose = require('mongoose');

//CHANGE MODEL
const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Name is required"
        ],
        minlength: [
            3,
            "Name must be at least three characters"
        ]
    }
}, {timestamps: true});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;