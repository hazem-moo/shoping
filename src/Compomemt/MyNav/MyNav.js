import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Link as scroll } from 'react-scroll'
import { Navbar, NavbarBrand, NavbarToggler, Nav, Collapse, NavItem, NavLink } from 'reactstrap'
import './MyNav.css'

const MyNav = () => {

    const [ isOpen, setIsOpen ] = useState(false)
    const toggle = _ => setIsOpen( !isOpen )

    return (
        <>
        <Navbar expand="md" light>
            <NavbarBrand tag={Link} exact to='/' className='red blue black green'> antomi </NavbarBrand>
        
            <NavbarToggler onClick={ toggle } >
                <i className={ `fas ${ isOpen ? "fa-times" : "fa-bars"} red blue black green` } ></i>
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar>
                <Nav className='mx-auto' navbar>
                    <NavItem>
                        <NavLink tag={scroll} className='red blue black green' exact to='Home' > home </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={scroll} className='red blue black green' to='Shop' smooth={true} duration={ 800 }> shop </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={scroll} className='red blue black green' to='About'smooth={true} duration={ 800 }> about us </NavLink>
                    </NavItem>
                        <NavItem>
                        <NavLink tag={scroll} className='red blue black green' to='/Contact' smooth={true} duration={ 800 }> contact </NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        </>
    )
}

export default MyNav