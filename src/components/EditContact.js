<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditContact = ({ contacts }) => {
	const [edit, setEdit] = useState("");
	const { id } = useParams();

	function handleUpdate() {
		console.log("update");
	}

	function handleCancel() {
		console.log("cancel");
=======
=======
>>>>>>> cd522b1... fixed git pull errors and add contact bug
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
<<<<<<< HEAD
>>>>>>> 036d783 (allow edit and search)
=======
>>>>>>> cd522b1... fixed git pull errors and add contact bug
	}

	return (
		<form onSubmit={(e) => e.preventDefault()}>
<<<<<<< HEAD
<<<<<<< HEAD
			<p>
				<label htmlFor="">Name: </label>
				<input type="text" />
=======
=======
>>>>>>> cd522b1... fixed git pull errors and add contact bug
			<h1>Edit Contact</h1>
			<p>
				<label htmlFor="">Name: </label>
				<input
					type="text"
					value={editName}
					onChange={(e) => setEditName(e.target.value)}
				/>
<<<<<<< HEAD
>>>>>>> 036d783 (allow edit and search)
=======
>>>>>>> cd522b1... fixed git pull errors and add contact bug
			</p>

			<p>
				<label htmlFor="">Name: </label>
<<<<<<< HEAD
<<<<<<< HEAD
				<input type="text" />
=======
=======

>>>>>>> cd522b1... fixed git pull errors and add contact bug
				<input
					type="text"
					value={editEmail}
					onChange={(e) => setEditEmail(e.target.value)}
				/>
<<<<<<< HEAD
>>>>>>> 036d783 (allow edit and search)
=======
>>>>>>> cd522b1... fixed git pull errors and add contact bug
			</p>
			<div className="buttons">
				<button onClick={handleUpdate}>Update</button>
				<button onClick={handleCancel}>Cancel</button>
			</div>
		</form>
	);
};

export default EditContact;
