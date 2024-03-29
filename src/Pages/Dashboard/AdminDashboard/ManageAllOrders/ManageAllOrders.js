import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import AdminHeader from '../../../Shared/Header/AdminHeader/AdminHeader';
import ManageOrderItem from '../../Items/ManageOrderItem/ManageOrderItem';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        fetch("https://darkless-motors-serverside.vercel.app/orders")
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders])

    const cancelOrder = id => {
        const proceed = window.confirm('Are You Sure? Do You Want To Cancel your Order?');
        if (proceed) {
            const url = `https://darkless-motors-serverside.vercel.app/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Order Cancel Successfully');
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    };
                });
        };
    };

    const updateOrder = id => {
        const proceed = window.confirm('Do Want To Update Order Status');
        if (proceed) {
            const url = `https://darkless-motors-serverside.vercel.app/orders/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ status: 'Shipped' })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('Status Update Successfully');
                    }
                })
        }
    }
    return (
        <div>
            <AdminHeader></AdminHeader>
            <h1 className="text-center my-4">MANAGE All <span className="text-warning">ORDERS</span></h1>
            <Row className="g-3 m-3" xs={1} md={3} >
                {
                    orders.map(order => <ManageOrderItem key={order?._id} order={order} cancelOrder={cancelOrder} updateOrder={updateOrder}> </ManageOrderItem>)
                }
            </Row>
        </div>
    );
};

export default ManageAllOrders;