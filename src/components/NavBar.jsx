import React from 'react';
import '../NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {


    return (
        <nav class="navbar-container">
            <ul className="nav-list">
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/transactions" className="nav-link">Transactions</Link></li>
                <li><Link to="/analytics" className="nav-link">Analytics</Link></li>

                <li className="account-item"><Link to="/account" className="nav-link">Account</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;