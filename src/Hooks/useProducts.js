import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        fetch('https://evening-retreat-75203.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])
    return [
        products
    ];
};

export default useProducts;