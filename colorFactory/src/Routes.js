import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import ColorList from "./ColorList";
import NewColorForm from "./NewColorForm";
import Color from "./Color";

const Routes = () => {
	const initialColors = JSON.parse(localStorage.getItem("colors")) || {
		red: "#FF0000",
		green: "#00FF00",
		blue: "#0000FF",
	};
	const [colors, updateColors] = useState(initialColors);
	useEffect(() => localStorage.setItem("colors", JSON.stringify(colors)), [
		colors,
	]);

	const addColor = (newColorObj) => {
		updateColors((prevColors) => ({ ...prevColors, ...newColorObj }));
	};

	const renderCurrentColor = (props) => {
		const { color } = props.match.params;
		const hex = colors[color];
		return <Color {...props} hex={hex} color={color} />;
	};

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/colors">
					<ColorList colors={colors} />
				</Route>
				<Route exact path="/colors/new">
					<NewColorForm addColor={addColor} />
				</Route>
				<Route path="/colors/:color" render={renderCurrentColor}></Route>
				<Redirect to="/colors" />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
