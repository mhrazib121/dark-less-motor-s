import { useEffect, useState } from 'react';

const useReview = () => {
    const [reviews, setReviews] = useState([]);
    const [isReviewsLoading, setIsReviewLoading] = useState(false);

    useEffect(() => {
        setIsReviewLoading(true);
        fetch('https://darkless-motors-serverside.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setIsReviewLoading(false);
            })
    }, [])
    return [
        reviews,
        isReviewsLoading
    ];
};

export default useReview;