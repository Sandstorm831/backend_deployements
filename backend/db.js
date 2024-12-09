const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.MONGO_DB_URL);

const ToDoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const ToDo = mongoose.model("ToDo", ToDoSchema);

module.exports = {
    ToDo
};
