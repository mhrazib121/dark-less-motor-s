import { useEffect, useState } from 'react';

const useReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://evening-retreat-75203.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return [
        reviews
    ];
};

export default useReview;