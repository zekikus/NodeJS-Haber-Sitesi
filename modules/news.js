/**
 * Created by Zeki on 22.06.2017.
 */
const mongoose = require('mongoose');

var NewsSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    }
});

const News = module.exports = mongoose.model('News', NewsSchema);