const mongoose = require('mongoose');

const WardSchema = mongoose.Schema({
    id: Number,
    name: String,
    huyen_id: Number
});

module.exports = mongoose.model('wards', WardSchema);