import React from 'react'
import { Link } from "react-router-dom";
import { menuItems } from './MenuItems';

export default function Navbar() {
    return (
        <div class="container">
            <header class="d-flex flex-column flex-md-row justify-content-between align-items-center pb-3 mb-4 py-3 mb-4 border-bottom border-2 border-secondary">
                <Link to='/'><img src="https://image.flaticon.com/icons/png/64/3004/3004703.png" alt='logo' width='60px' height='60px' /></Link>
                <ul className="nav nav-pills">
                    {menuItems.map(item => (
                        <li key={item.id} className='nav-item' ><Link className='me-3 py-2 text-white text-decoration-none' to={item.to}>{item.title}</Link></li>
                    ))}
                </ul>
            </header>
        </div>
    )
}