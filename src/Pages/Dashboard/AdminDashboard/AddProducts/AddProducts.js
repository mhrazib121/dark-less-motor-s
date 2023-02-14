import React from 'react';
import AdminHeader from '../../../Shared/Header/AdminHeader/AdminHeader';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddProducts.css'

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://darkless-motors-serverside.vercel.app/products', data)
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
            <h1 className="text-center my-4">ADD NEW <span className="text-warning">FEATURED PRODUCT</span></h1>
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