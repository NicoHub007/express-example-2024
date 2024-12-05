const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
    name: {typ: String, required: true},
    color: {type: String, required: true},
    readyToEat: Boolean
}, {
    timestamps: true
})

const Fruit = mongoose.model("Fruit", fruitSchema);

module.exports = Fruit;