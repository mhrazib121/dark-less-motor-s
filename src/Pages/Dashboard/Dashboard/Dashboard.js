import React from 'react';
import AdminHeader from '../../Shared/Header/AdminHeader/AdminHeader';
import UserHeader from '../../Shared/UserHeader/UserHeader';

const Dashboard = () => {
    return (
        <div>
            <UserHeader></UserHeader>
            <AdminHeader></AdminHeader>
            <h1 className="text-center text-primary mt-5"> Welcome To Deshboard </h1>
        </div>
    );
};

export default Dashboard;