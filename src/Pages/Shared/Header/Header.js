import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
import logo from '../../../Images/logo.png'
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user.email)
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="header-design " variant="dark">
                <Container>
                    <Navbar.Brand >
                        <img className="w-50" src={logo} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto nav-hover ">
                            <NavLink className="nav-btn" to="/home">Home</NavLink>
                            <NavLink className="nav-btn" to="/products">products</NavLink>
                            <NavLink className="nav-btn" to="/about">About</NavLink>
                           
                        </Nav>
                        <Nav>
                            {
                                user.email ?
                                    <>
                                    <NavLink className="nav-btn" to="/dashboard">Dashboard</NavLink>
                                    
                                    <button className="btn btn-primary" onClick={logOut}> logOut </button>
                                    </>
                                    :
                                    <>  <NavLink to="/login" className="text-white nav-btn btn btn-primary" >Login</NavLink>
                                        <NavLink to="/signup" className="text-white nav-btn btn btn-primary" >
                                            Register
                                        </NavLink>
                                    </>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;