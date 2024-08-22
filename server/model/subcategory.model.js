const mongoose = require('mongoose');

const subCategorySchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    subCategoryName: {
        type: String,
        required: true
    },
    subCategorySequence: {
        type: Number,
        required: true
    },
    status:{
        type:Boolean,
        default:false

    }
    
});

module.exports = mongoose.model('SubCategory', subCategorySchema);
