import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="">shop</a>
                <a href="">order</a>
                <a href="">Inventory</a>
                <a href="">Login</a>
            </div>
        </nav>
    );
};

export default Header;