import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Header from '../Shared/Header/Header';
import { useHistory, useLocation } from 'react-router';

const SignUp = () => {
    const {registerUser}=useAuth();
    const { register, handleSubmit, reset} = useForm();
    const history = useHistory();
    const location = useLocation();

    // Submit user details 
  const onSubmit = data => {
      if (data.password === data.confirmPassword){
        registerUser(data.email, data.password, data.name, history, location);
        reset();
      }
      else{
          alert(' Password did not match')
      }
  };
   
    return (
        <>
            <Header> </Header>
            <h1>Please create a user</h1>
            <div className="input-field">
               
                <form className=" " onSubmit={handleSubmit(onSubmit)}>

                    <input  type="text" placeholder="Enter Your Name" {...register("name", { required: true })} />
                    <br />

                    <input  type="email" placeholder="Enter Your Email" {...register("email", { required: true })} />
                    <br />
                    <input  type="password" placeholder="PassWord"  {...register("password", { required: true })} />
                    <br />
                    <input type="password" placeholder="Confirm PassWord"  {...register("confirmPassword", { required: true })} />
                    {/* <br />
                    <input placeholder="Phone number" type="number" defaultValue="" {...register("phone", { required: true })} /> */}
                    <button className="btn btn-primary " type="submit">Sign Up</button>
                    <br />
                    <br />
                    <Link to="/login"> Already have a account. </Link>
                </form>
            </div>
        </>
    );
};

export default SignUp;