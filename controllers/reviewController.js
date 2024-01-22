const Review = require('../model/review');

const getAllReviews = async (req,res) => {
    if(!req?.params?.id){
        res.status(400).json({ "Message": "Movie Id required"});
    }

    const reviews = await Review.find({ movieId : req.params.id });
    if(!reviews) return res.status(204).json({
        "Message": `No movie matched id ${req.params.id}`
    });

    res.json(reviews);
}

const postReview = async (req, res) => {
    if(!req?.body?.movieId || !req?.body?.review || !req?.body?.user){
        res.status(400).json({ "message": "Review and Username is required"});
    }

    try{
        const result = await Review.create({
            movieId: req.body.movieId,
            user: req.body.user,
            review: req.body.review
        });

        res.status(201).json(result);
    } catch(err) {
        console.error(err);
    }
}

const getReview = async (req, res) => {
    if(!req?.params?.id){
        res.status(400).json({ "Message": "Movie Id required"});
    }

    const movieReview = await Review.findOne({ _id: req.params.id }).exec();
    if(!movieReview){
        return res.status(204).json({ "Message": `No movie matched ID ${req.params.id}`});
    }
    res.json(movieReview);
}

const updateReview = async (req, res) => {
    if(!req?.params?.id){
        res.status(400).json({ "Message": "Movie Id required"});
    }

    const movieReview = await Review.findOne({ _id: req.params.id }).exec();
    if(!movieReview){
        return res.status(204).json({ "Message": `No movie matched ID ${req.params.id}`});
    }

    if(req.body?.review){
        movieReview.review = req.body.review;
    }   

    const result = await movieReview.save();
    res.json(result);
}

const deleteReview = async (req, res) => {
    if(!req?.params?.id){
        res.status(400).json({ "Message": "Movie Id required"});
    }

    const movieReview = await Review.findOne({ _id: req.params.id }).exec();
    if(!movieReview){
        return res.status(204).json({ "Message": `No movie matched ID ${req.params.id}`});
    }

    const result = await Review.deleteOne({ _id: req.params.id });
    res.json(result);
}

module.exports = {
    getAllReviews,
    getReview,
    postReview,
    deleteReview,
    updateReview
}