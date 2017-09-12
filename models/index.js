var mongoose = require("mongoose");
mongoose.set('debug', true)
mongoose.connect('mongodb://localhost/items-express')

mongoose.Promise = Promise

module.exports.Item = require("./item")
