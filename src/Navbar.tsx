import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <li><Link to="/Counter">Counter</Link></li>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Contacts">Contacts</Link></li>
            <hr />
        </div>
    );
};

export default Navbar;