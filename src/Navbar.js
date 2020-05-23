import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import './App.css';
import Logo from './logo2.png';

const NavbarNews = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar light expand="md">
                <div class="container">
                <NavbarBrand href="/"><img src={Logo} id="imgLogo" alt="Soft News"/></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/"><b>Lifestyle</b></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/"><b>Health</b></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/"><b>Technology</b></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                </div>
            </Navbar>
        </div>
    );
}

export default NavbarNews;