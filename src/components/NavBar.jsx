import React from 'react';
import '../NavBar.css';

function NavBar() {


    return (
        <nav class="navbar-container">
            <ul className="nav-list">
                <li><button className="nav-link">Home</button></li>
                <li><button className="nav-link">Transactions</button></li>
                <li><button className="nav-link">Spending</button></li>

                <li className="account-item"><button className="nav-link">Account</button></li>
            </ul>
        </nav>
    );
}

export default NavBar;