import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
    return (
            <nav className="container-nav">
                <Link to="/dogs">Dogs</Link>
                <Link to="/birds">Birds</Link>
                <Link to="/">Todos</Link>
            </nav>
    )
}