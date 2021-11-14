import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import useProducts from '../../Hooks/useProducts';
import './PurchaseProduct.css'

const PurchaseProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const [products] = useProducts();
    const { id } = useParams();
    const history = useHistory();
    const { user } = useAuth();
    console.log(id);
    const productData = products.find(product => product._id === id);
    console.log(productData);

    // Submit data to database 
    const onSubmit = data => {
        data.package = productData;
        data.status = 'Pending';

        axios.post('https://evening-retreat-75203.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Placing order successfully');
                    reset();
                    history.push('/myOrder');
                }
            })
    }
    return (
        <div className="">
            <div className="container my-5 row mx-auto align-items-center">
                <div className="col-lg-8">
                    <img className="w-100" src={productData?.img} alt="" />
                    <h1 className=" text-primary mt-3">{productData?.name}</h1>
                    <p>{productData?.description}</p>
                    <h4><span className="text-danger">${productData?.price}</span>/Person</h4>
                </div>
                <div className="perchase-details col-lg-4 text-center">
                    <h1> Place Your Order</h1>
                    <p>To explore world <span className="text-warning">Ride Safely !</span></p>
                    <form className=" d-block" onSubmit={handleSubmit(onSubmit)}>

                        <input defaultValue={user.displayName} {...register("name", { required: true })} />

                        <input defaultValue={user.email} {...register("email", { required: true })} />
                        <input placeholder="Address" defaultValue="" {...register("address", { required: true })} />
                        <input placeholder="City" defaultValue="" {...register("city", { required: true })} />
                        <input placeholder="Phone number" type="number" defaultValue="" {...register("phone", { required: true })} />
                        <button className="btn btn-primary" type="submit">Place Order</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PurchaseProduct;