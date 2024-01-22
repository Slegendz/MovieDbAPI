const express = require('express');
const router = express.Router();

const reviewController = require('../../controllers/reviewController');

router.route('/movie/:id').get(reviewController.getAllReviews);

router.route('/new').post(reviewController.postReview);

router.route('/:id')
    .get(reviewController.getReview)
    .put(reviewController.updateReview)
    .delete(reviewController.deleteReview);

module.exports = router;