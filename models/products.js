const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    "invp2022": {
        type: String,
    },
    "cthi2021": {
        type: Number,
    },
    "gb2021": {
        type: String,
    },
    "ta2021": {
        type: Number,
    },
    "mfsi2020": {
        type: Number,
    },
    "sink2017": {
        type: Number,
    },
    "rank": {
        type: Number,
    },
    "country": {
        type: String,
    },
    "region": {
        type: String,
    },
    "createdAt": {
      type: Date,
      default: Date.now()
    }
})

module.exports = mongoose.model('Product', productSchema);



