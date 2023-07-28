const mongoose = require('mongoose');

const problemListSchema = new mongoose.Schema({
problemName : { type:  String, description: "Required Field", required: true },
difficulty : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('problemList', problemListSchema);