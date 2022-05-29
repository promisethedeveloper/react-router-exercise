import React from "react";
import { Link } from "react-router-dom";
import "./Colors.css";

const Color = ({ hex, color, history }) => {
	if (!hex) {
		history.push("/colors");
	}

	return (
		<div className="Color" style={{ backgroundColor: hex }}>
			<h1>This is {color}. Isn't it beautiful?</h1>
			<Link to="/">go back</Link>
		</div>
	);
};

export default Color;
