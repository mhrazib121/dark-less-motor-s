import React from 'react';
import AdminHeader from '../../../Shared/Header/AdminHeader/AdminHeader';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddProducts.css'

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://evening-retreat-75203.herokuapp.com/products', data)
            .then(res => {
                // console.log(res)
                if (res.data.insertedId) {
                    alert('Added Succesfully')
                    reset();
                }
            })
    }
    return (
        <div>
            <AdminHeader></AdminHeader>
            <h1>add product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name",)} placeholder="product Name" />
                <input {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Image URL" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;