import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import logo from '../../../../Images/logo.png'

const AdminHeader = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
             {/* className="sticky-top"  */}
            
            <Navbar collapseOnSelect expand="lg" className="header-design " variant="dark">
                <Container>
                    <Navbar.Brand >
                        <img className="w-50" src={logo} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto nav-hover ">
                            <NavLink className="nav-btn" to="/home">Home</NavLink>
                            <NavLink className="nav-btn" to="/makeadmin">Make Admin</NavLink>
                            <NavLink className="nav-btn" to="/addproducts">Add Products</NavLink>
                            <NavLink className="nav-btn" to="/manageallorders">Manage All Orders</NavLink>
                            <NavLink className="nav-btn" to="/manageproducts">Manage Products</NavLink>
                        </Nav>
                        <Nav>
                            <button onClick={logOut}> logOut </button>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default AdminHeader;