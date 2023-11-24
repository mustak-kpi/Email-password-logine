import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to="/">home</Link>
            <Link to="/logine">logine</Link>
            <Link to="/Register">Register</Link>
            <Link to='/RegisterRBS'>RegisterRBS</Link>
            <Link to="/RegisterBS">RegisterRB</Link>
        </nav>
    );
};

export default Header;