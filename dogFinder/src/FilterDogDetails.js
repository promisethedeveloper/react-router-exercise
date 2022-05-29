import React from "react";
import { useParams } from "react-router-dom";
import DogDetails from "./DogDetails";

const FilterDogDetails = ({ dogs }) => {
	const { name } = useParams();

	if (name) {
		const foundDog = dogs.find(
			(d) => d.name.toLowerCase() === name.toLowerCase()
		);
		return <DogDetails dog={foundDog} />;
	}

	return null;
};

export default FilterDogDetails;
