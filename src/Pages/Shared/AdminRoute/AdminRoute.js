import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../../Hooks/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    const {user,admin, isLoading} = useAuth();
    console.log(user)
    if (isLoading) {
        return <div className="justify-content-center d-flex">
            <Spinner className="text-center  my-4" animation="border" variant="danger" />
        </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    ></Redirect>
                )
            }
        >

        </Route>
    );
};

export default AdminRoute;