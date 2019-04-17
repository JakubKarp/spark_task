const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Kakle = new Schema({
    name: {
        type: String
    },
    category: {
        type: String
    },
    color: {
        type: String
    },
    price: {
        type: Number
    },
    magazine_amount: {
        type: Number
    }
});

module.exports = mongoose.model('Products', Kakle);
//mongoose.model("nazwa kolekcji - automatycznie zmienia sobie na lowerCase", schema)