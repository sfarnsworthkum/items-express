var mongoose = require("mongoose");
var ObjectId = mongoose.Schema.ObjectId;

var itemSchema = new mongoose.Schema({
    id: ObjectId,
    name: String,
    quantity: Number,

})

var Item = mongoose.model('Item', itemSchema)

module.exports = Item
