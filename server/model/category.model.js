const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    categoryname: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    }
    // },
    // status:{
    //     type:Boolean,
    //     default:false

    // }
    
    
});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
