import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Header from '../Shared/Header/Header';
import { useHistory, useLocation } from 'react-router';
import './Login.css'

const Login = () => {
    const{loginUser, signInUsingGoogle} = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const location= useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home'
    const onSubmit = data => {
        loginUser(data.email, data.password)
        .then(result=>{
            history.push(redirect_url)
        })
        reset();
    };

    const googleLogin=()=>{
        signInUsingGoogle()
        .then(result => {
            // const user = result.user;
            // setUser(user);
            // console.log(user);
            history.push(redirect_url)
            
        })
        
    }
    return (
        <div className="App">
            <Header> </Header>
            <h1>please Login</h1>
            <div className="input-field">
               
                <form id="from" onSubmit={handleSubmit(onSubmit)}>

                    {/* <input  type="text" placeholder="Enter Your Name" {...register("name", { required: true })} />
                    <br /> */}

                    <input type="email" placeholder="Enter Your Email" {...register("email", { required: true })} />
                    <br />
                    <input type="password" placeholder="PassWord"  {...register("password", { required: true })} />
                    <br />
                    {/* <input type="password" placeholder="Confirm PassWord"  {...register("confirmPassword", { required: true })} /> */}
                    {/* <br />
                    <input placeholder="Phone number" type="number" defaultValue="" {...register("phone", { required: true })} /> */}
                    <button className="btn btn-primary " type="submit">Login</button>
                    <br />
                    <br />
                    <Link to="/signup"> Create New User. </Link>
                </form>
        
            </div>
            <br/>
                {/* google sign in  */}

            <button className="m-2 text-center btn bg-primary text-white rounded-2" onClick={googleLogin} > Google Login </button>
        </div>
    );
};

export default Login;