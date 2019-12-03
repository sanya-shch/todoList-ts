import React from "react";

export const Navbar: React.FC = () => (
    <nav>
        <div className="nav-wrapper purple darken-4 px1">
            <a href="/" className="brand-logo">React + TypeScript</a>
            <ul className="right hide-on-med-and-down">
                <li><a href="/">List Todo</a></li>
                <li><a href="/">Info</a></li>
            </ul>
        </div>
    </nav>
);