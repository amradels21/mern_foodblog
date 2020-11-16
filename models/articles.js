const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    ingredients: {
        type: String,
        required: true
    },
    recipe: {
        type: String,
        required: true
    },
    articleImage:{
        type: String,
        required: true
    },
    postDate: {
        type: Date,
        default: Date.now
    }

});


var Articles = mongoose.model('Articles', articleSchema);

module.exports = Articles;