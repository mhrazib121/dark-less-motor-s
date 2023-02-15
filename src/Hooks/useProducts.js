import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [isProductLoading, setIsProductLoading] = useState(false);
    useEffect(() => {
        setIsProductLoading(true);
        fetch('https://darkless-motors-serverside.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setIsProductLoading(false);
            })
    }, [])
    return [
        products,
        isProductLoading,
    ];
};

export default useProducts;