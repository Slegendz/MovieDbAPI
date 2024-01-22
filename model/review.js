const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    movieId: {
        type: mongoose.Schema.Types.Number,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Review', reviewSchema);