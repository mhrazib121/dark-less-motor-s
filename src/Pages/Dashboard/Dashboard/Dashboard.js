import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import AdminHeader from '../../Shared/Header/AdminHeader/AdminHeader';
import UserHeader from '../../Shared/UserHeader/UserHeader';

const Dashboard = () => {
    const { user, admin } = useAuth();
    return (
        <div>
            {admin && user.email?
            <AdminHeader></AdminHeader>
            :
            <UserHeader></UserHeader>
            
            }
            <h1 className="text-center text-primary mt-5"> Welcome To Deshboard </h1>
        </div>
    );
};

export default Dashboard;