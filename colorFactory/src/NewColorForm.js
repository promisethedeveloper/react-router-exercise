import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./NewColorForm.css";

const NewColorForm = ({ addColor }) => {
	const [form, updateForm] = useState({ name: "", hex: "#ffffff" });
	const history = useHistory();

	const handleChange = (e) => {
		e.persist();
		const { name, value } = e.target;
		updateForm((data) => ({
			...data,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addColor({ [form.name]: form.hex });
		history.push("/colors");
	};

	const { name, hex } = form;

	return (
		<div className="NewColor">
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Color name</label>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Enter color name"
						onChange={handleChange}
						value={name}
					/>
				</div>
				<div>
					<label htmlFor="hex">Color value</label>
					<input
						type="color"
						name="hex"
						id="hex"
						onChange={handleChange}
						value={hex}
					/>
				</div>
				<input type="submit" value="Add this color" readOnly />
			</form>
		</div>
	);
};

export default NewColorForm;
