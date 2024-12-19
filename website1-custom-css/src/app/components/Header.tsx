"use client";

import Link from "next/link";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleHamburgerClick = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className="header">
            <h1 className="logo">Travel.com</h1>
            <nav className={`nav ${menuOpen ? "open" : ""}`}>
                
                <button className="hamburger" onClick={handleHamburgerClick}>
                    ☰
                </button>

                <div className="nav-links">
                    <Link href="/" onClick={handleLinkClick}>Home</Link>
                    <Link href="/about" onClick={handleLinkClick}>About</Link>
                    <Link href="/flights" onClick={handleLinkClick}>Flights</Link>
                    <Link href="/service" onClick={handleLinkClick}>Services</Link>
                    <Link href="/contact" onClick={handleLinkClick}>Contact</Link>
                    <Link href="/cart" onClick={handleLinkClick}>
                        <FaShoppingCart />
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
