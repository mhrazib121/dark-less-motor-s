import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../../../Hooks/useAuth';
import UserHeader from '../../../Shared/UserHeader/UserHeader';
import OrderItem from '../../Items/OrderItem/OrderItem';

const MyOrder = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch("https://evening-retreat-75203.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => {
                const myOrder = data.filter(order => order.email === user.email);
                setOrders(myOrder)
            })
    }, [])

    // Order Cancel 
    const cancelOrder = id => {
        const proceed = window.confirm('Are You Sure? Do You Want To Cancel Your Order');
        if (proceed) {
            const url = `https://evening-retreat-75203.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Package Cancel Successfully');
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    };
                });
        };
    };
    return (
        <div>
            <>
                <UserHeader ></UserHeader>
            </>
            <h1 className="text-center pt-5 my-5"> My <span className="text-warning">Orders</span> </h1>
            <Row className="g-3 m-3" xs={1} md={3} >
                {
                    orders.map(order => <OrderItem key={order?._id} order={order} cancelOrder={cancelOrder} > </OrderItem>
                    )
                }
            </Row>
        </div>
    );
};

export default MyOrder;