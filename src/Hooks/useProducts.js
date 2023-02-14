import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        fetch('https://darkless-motors-serverside.vercel.app/products')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])
    return [
        products
    ];
};

export default useProducts;