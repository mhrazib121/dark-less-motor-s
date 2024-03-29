import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../../../Hooks/useProducts';
import AdminHeader from '../../../Shared/Header/AdminHeader/AdminHeader';
import ManageProductItem from '../../Items/ManageProductItem/ManageProductItem';

const MangeProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://darkless-motors-serverside.vercel.app/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])

    console.log(products, setProducts)
    // Delete a Product
    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are You Sure? Do You Want To Delete?');
        if (proceed) {
            const url = `https://darkless-motors-serverside.vercel.app/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Product Delete Successfully');
                        const remainingProducts = products.filter(product => product._id !== id);
                        setProducts(remainingProducts);
                    };
                });
        };
    };
    return (
        <div>
            <AdminHeader></AdminHeader>
            <div className="mt-5 mb-5 text-center ">
                <h1 className="text-center my-4">MANAGE <span className="text-warning">PRODUCTS</span></h1>
                <h5 className="text-danger">ADMIN CAN HANDLE THIS</h5>
            </div>
            <div className="container">
                <div className="container my-5">
                    <Row xs={1} md={3} className="g-5 p-4">
                        {
                            products.map(product => <ManageProductItem key={product?._id} product={product} handleDeleteProduct={handleDeleteProduct}> </ManageProductItem>)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default MangeProducts;