import axios from 'axios';
import React from 'react';
import { Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import useAuth from '../../../../Hooks/useAuth';
import UserHeader from '../../../Shared/UserHeader/UserHeader';
import './Review.css'

const Review = () => {
    const { user } = useAuth();
    const history = useHistory();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.img = user.photoURL;
        axios.post('https://darkless-motors-serverside.vercel.app/reviews', data)
            .then(res => {
                // console.log(res)

                if (res.data.insertedId) {
                    alert('Added Succesfully')
                    reset();
                    history.push('/home');
                }
            })
    }
    return (
        <div>
            <UserHeader></UserHeader>
            <h1 className="text-center pt-5 my-5"> Provide your  <span className="text-warning"> Valuable Opinion</span> about us </h1>
            <div className="form-field">
                <form className="feedback-field" onSubmit={handleSubmit(onSubmit)}>

                    <input defaultValue={user.displayName} {...register("name", { required: true })} />
                    <br />
                    <input defaultValue={user.email} {...register("email", { required: true })} />
                    <br />
                    <input placeholder="Provide rate" type="number" defaultValue="" {...register("rating", { required: true, min: 1, max: 5 })} />
                    <br />
                    <input placeholder="Provide your feedback" {...register("feedback", { required: true })} />
                    <br />

                    <button className="btn btn-primary " type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Review;