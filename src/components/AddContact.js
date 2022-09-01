import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../fetchContacts/fetchItems";

const AddContact = ({ contacts, setContacts }) => {
	const [newContactName, setNewContactName] = useState("");
	const [newContactEmail, setNewContactEmail] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async () => {
		if (newContactName === "" || newContactEmail === "") {
			return;
		}

		const id = contacts ? contacts[contacts.length - 1].id + 1 : 1;
		const newContact = {
			id,
			contact: newContactName,
			email: newContactEmail,
		};

		await api.post("/contacts", newContact);
		const newContacts = [...contacts, newContact];
		setContacts(newContacts);
		navigate("/");
	};

	function handleCancel() {
		navigate("/");
	}

	return (
		<div className="new-contact">
			<h2>Add Contact</h2>

			<form
				className="new-contact-form"
				onSubmit={(e) => e.preventDefault()}
			>
				<p>
					<label htmlFor="name">Name(s): </label>
					<input
						autoComplete="off"
						type="text"
						id="name"
						placeholder="Contact name(s)"
						required
						value={newContactName}
						onChange={(e) => setNewContactName(e.target.value)}
					/>
				</p>

				<p>
					<label htmlFor="email">Email adress: </label>
					<input
						autoComplete="off"
						type="email"
						id="email"
						placeholder="Email adress"
						required
						value={newContactEmail}
						onChange={(e) => setNewContactEmail(e.target.value)}
					/>
				</p>
			</form>

			<div className="buttons">
				<button className="submit-btn" onClick={handleSubmit} type="submit">
					Submit
				</button>

				<button className="cancel-btn" onClick={handleCancel}>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default AddContact;
