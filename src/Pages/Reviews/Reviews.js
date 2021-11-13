import React from 'react';
import { Row } from 'react-bootstrap';
import useReview from '../../Hooks/useReview';
import ReviewItem from '../Dashboard/Items/ReviewItem/ReviewItem';

const Reviews = () => {
    const [reviews] =useReview();
    console.log(reviews)
    return (
        <div>
            <Row xs={1} md={3}>
            {
                reviews.map(review=> <ReviewItem kew={review.id} review={review} ></ReviewItem>)
            }
            </Row>
        </div>
    );
};

export default Reviews;