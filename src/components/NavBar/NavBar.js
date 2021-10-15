import React from 'react'
import './Navbar.css'
import { Nav, Form, Button, Navbar } from "react-bootstrap"
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <div style={{ display: 'flex' }}>
                    {/* <Navbar.Brand >WS-Router</Navbar.Brand> */}
                    <Nav className="mr-auto">
                        <Link to='/' className="appLink" activeClassName="activeLink">Home</Link>
                        <Link to='/users' className="appLink" activeClassName="activeLink">users</Link>
                        <Link className="appLink" activeClassName="activeLink">Admin</Link>
                    </Nav>
                </div>
                <Form inline>
                    <Button variant="outline-info" className="loginBtn"
                    >login</Button>
                </Form>
            </Navbar>
        </div>
    )
}

export default NavBar
