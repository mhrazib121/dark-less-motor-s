import React from 'react';
// import useAuth from '../../../Hooks/useAuth';
import UserHeader from '../../Shared/UserHeader/UserHeader';

const UserDeshboard = () => {
    // const {user} = useAuth();
    return (
        <div>
            <UserHeader></UserHeader>
            <h1> Welcome to User Dashboard </h1>
        </div>
    );
};

export default UserDeshboard;