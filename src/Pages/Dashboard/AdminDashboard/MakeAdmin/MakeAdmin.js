import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <h1>Make Admin</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder="Enter Email address" {...register("admin")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default MakeAdmin;