import React, { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../fetchContacts/fetchItems";

const EditContact = ({ contacts, setContacts }) => {
	const [editName, setEditName] = useState("");
	const [editEmail, setEditEmail] = useState("");
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const contact = contacts.find((contact) => contact.id.toString() === id);
		if (contact) {
			setEditName(contact.name);
			setEditEmail(contact.email);
		}
	}, [id, contacts]);

	async function handleUpdate() {
		if (editName === "" || editEmail === "") {
			navigate("/");
			return;
		}
		const updatedContacts = contacts.map((contact) =>
			contact.id.toString() === id
				? { id, name: editName, email: editEmail.split(" ").join("") }
				: contact
		);
		await api.put(`/contacts/${id}`, {
			id,
			name: editName,
			email: editEmail,
		});
		setContacts(updatedContacts);
		navigate("/");
	}

	function handleCancel() {
		navigate("/");
	}

	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<h1>Edit Contact</h1>
			<p>
				<label htmlFor="">Name: </label>
				<input
					type="text"
					value={editName}
					onChange={(e) => setEditName(e.target.value)}
				/>
			</p>

			<p>
				<label htmlFor="">Name: </label>
				<input
					type="text"
					value={editEmail}
					onChange={(e) => setEditEmail(e.target.value)}
				/>
			</p>
			<button onClick={handleUpdate}>Update</button>
			<button onClick={handleCancel}>Cancel</button>
		</form>
	);
};
