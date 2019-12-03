import React from "react";
import {NavLink} from "react-router-dom";

export const Navbar: React.FC = () => (
    <nav>
        <div className="nav-wrapper purple darken-4 px1">
            <a href="/" className="brand-logo">React + TypeScript</a>
            <ul className="right hide-on-med-and-down">
                <li><NavLink to="/">List Todo</NavLink></li>
                <li><NavLink to="/about">Info</NavLink></li>
            </ul>
        </div>
    </nav>
);