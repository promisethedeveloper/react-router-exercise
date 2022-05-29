import React from "react";
import { NavLink } from "react-router-dom";
import "./DogList.css";

const DogList = ({ dogs }) => {
	return (
		<div className="DogList">
			<div className="row mt-4">
				<div className="col"></div>
				<h1 className="text-center">
					Hey there! We have cute dogs. Click on them for more information!
				</h1>
			</div>
			<div className="row">
				{dogs.map((d) => (
					<div className="col-3 text-center" key={d.name}>
						<img src={d.src} alt={d.name} />
						<h3 className="mt-3">
							<NavLink to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</NavLink>
						</h3>
					</div>
				))}
			</div>
		</div>
	);
};

export default DogList;
