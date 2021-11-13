import React from 'react';
import { Row } from 'react-bootstrap';
import useReview from '../../Hooks/useReview';
import ReviewCard from '../Shared/ReviewCard/ReviewCard';

const Reviews = () => {
    const [reviews] =useReview();
    console.log(reviews)
    return (
        <div>
            <Row xs={1} md={3}>
            {
                reviews.map(review=> <ReviewCard kew={review.id} review={review} ></ReviewCard>)
            }
            </Row>
        </div>
    );
};

export default Reviews;