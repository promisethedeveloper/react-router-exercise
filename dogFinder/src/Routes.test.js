import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Routes from "./Routes";
import { dogs } from "./App";

test("renders all dog names in the dog list", () => {
	const { getByText } = render(
		<MemoryRouter initialEntries={["/dogs"]}>
			<Routes dogs={dogs} />
		</MemoryRouter>
	);
	const dogNames = dogs.map((d) => d.name);
	for (const name of dogNames) {
		const linkElement = getByText(name);
		expect(linkElement).toBeInTheDocument();
	}
});

test("It renders only Duke's information", () => {
	const { getByText } = render(
		<MemoryRouter initialEntries={["/dogs/duke"]}>
			<Routes dogs={dogs} />
		</MemoryRouter>
	);

	const dukeInfo = dogs.find((d) => d.name === "Duke");
	const perryInfo = dogs.find((d) => d.name === "Perry");

	const liElement = getByText(new RegExp(dukeInfo.facts[0], "i"));
	expect(liElement).toBeInTheDocument();

	expect(screen.queryByText(new RegExp(perryInfo.facts[0], "i"))).toBeNull();
});

test("It should redirect to Home on  a bad request", () => {
	const { getByText } = render(
		<MemoryRouter initialEntries={["/no-route"]}>
			<Routes dogs={dogs} />
		</MemoryRouter>
	);
	const dogNames = dogs.map((d) => d.name);
	for (const name of dogNames) {
		const linkElement = getByText(name);
		expect(linkElement).toBeInTheDocument();
	}
});
