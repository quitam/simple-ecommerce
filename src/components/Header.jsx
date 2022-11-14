import React, { useContext, useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { ThemeContext } from '../GlobalComponents/ThemeProvider';
import { FaSun, FaMoon, FaCartArrowDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';

const Header = () => {
    const { theme, setThemeMode } = useContext(ThemeContext);
    const [darkMode, setDarkMode] = useState(theme);
    useEffect(() => {
        setThemeMode(darkMode);
        console.log(darkMode);
    }, [darkMode, setThemeMode]);

    const { isEmpty, totalItems } = useCart();
    return (
        <Navbar
            collapseOnSelect
            expand="md"
            variant={darkMode ? 'dark' : 'light'}
            className={darkMode ? 'bg-light-black border-bottom' : 'bg-light border-bottom'}
            style={{ width: '100%', position: 'fixed', zIndex: '100' }}
        >
            <Container>
                <Link to="/" className="text-decoration-none">
                    <Navbar.Brand className={darkMode ? 'text-dark-primary' : 'text-light-primary'}>
                        <b>Y-Shop</b>
                    </Navbar.Brand>
                </Link>
                <Link to="/"></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            className={darkMode ? 'text-dark-primary' : 'text-light-primary'}
                            onClick={() => setDarkMode(!darkMode)}
                        >
                            {darkMode ? <FaMoon size="1.5rem" /> : <FaSun size="1.5rem" />}
                        </Nav.Link>
                        <Link
                            to="/cart"
                            className={`${
                                darkMode ? 'text-dark-primary' : 'text-light-primary'
                            } d-flex align-items-center text-decoration-none`}
                        >
                            <FaCartArrowDown size="2rem" />
                            {!isEmpty && (
                                <span
                                    style={{
                                        position: 'relative',
                                        left: '-10px',
                                        top: '-15px',
                                        width: '19px',
                                        height: '19px',
                                        fontSize: '12px',
                                        backgroundColor: 'red',
                                        color: '#fff',
                                    }}
                                    className="rounded-circle align-items-center d-flex justify-content-center"
                                >
                                    {totalItems}
                                </span>
                            )}
                            <span style={{ marginLeft: !isEmpty ? '-13px' : '0' }}>Cart</span>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
