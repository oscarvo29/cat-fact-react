import React from 'react'
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    //const [isOpen, setOpen] = useState(false);
    return (
        <nav role="navigation" aria-label="Main-navigation">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/getTen">Get Ten Facts</NavLink>
            <NavLink to="/getAll">Get All Facts</NavLink>
        </nav>
    )
}
