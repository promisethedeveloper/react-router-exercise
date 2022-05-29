import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ dogs }) => {
	const navLinks = dogs.map((d) => (
		<NavLink key={d.name} to={`/dogs/${d.name.toLowerCase()}`}>
			{d.name}
		</NavLink>
	));
	return (
		<nav>
			<NavLink exact to="/dogs">
				Home
			</NavLink>
			{navLinks}
		</nav>
	);
};

export default NavBar;
