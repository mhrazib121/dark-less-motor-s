import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../Images/logo.png'
import useAuth from '../../../Hooks/useAuth';

const UserHeader = () => {
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
                            <NavLink className="nav-btn" to="/pay">Pay</NavLink>
                            <NavLink className="nav-btn" to="/myorder">My Order</NavLink>
                            <NavLink className="nav-btn" to="/review">Review</NavLink>
                        </Nav>
                        <Nav>
                            {user.email &&
                                <button className="btn btn-primary" onClick={logOut}> logOut </button>}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default UserHeader;