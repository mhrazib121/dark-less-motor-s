import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import AdminHeader from '../../../Shared/Header/AdminHeader/AdminHeader';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        setEmail(data);
        fetch('https://darkless-motors-serverside.vercel.app/users/admin', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div>
            <AdminHeader></AdminHeader>
            <div className=" mt-5">
                <h1 className="text-center my-4">MAKE <span className="text-warning">ADMIN</span></h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="w-50 p-2" type="email" placeholder="Enter Email address" {...register("email")} />
                    <br />
                    <input className="w-25 mt-3" type="submit" value="Admin" />
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;