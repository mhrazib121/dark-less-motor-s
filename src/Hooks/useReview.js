import { useEffect, useState } from 'react';

const useReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://darkless-motors-serverside.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return [
        reviews
    ];
};

export default useReview;