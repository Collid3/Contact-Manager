import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import api from "../fetchContacts/fetchItems";
import { useNavigate } from "react-router-dom";

const ContactList = ({ contacts, setContacts }) => {
	const navigate = useNavigate();

	const handleDelete = async (id) => {
		const newContacts = contacts.filter((contact) => contact.id !== id);
		await api.delete(`/contacts/${id}`);
		setContacts(newContacts);
	};

	const handleEdit = (id) => {
		console.log(typeof id);
		navigate(`/contacts/${id}`);
	};

	return (
		<form className="contact-list" onSubmit={(e) => e.preventDefault()}>
			<ul>
				{contacts.map((contact) => (
					<li className="contact" key={contact.id}>
						<div className="contact-picture">
							<BsFillPersonFill />
						</div>

						<div className="contact-details">
							<div className="contact-info">
								<h4 className="contact-name">{contact.contact}</h4>
								<p className="contact-email">{contact.email}</p>
							</div>

							<div className="buttons">
								<button
									className="edit-btn"
									onClick={() => handleEdit(contact.id)}
								>
									<FiEdit />
								</button>
								<button
									className="delete-btn"
									onClick={() => handleDelete(contact.id)}
								>
									<MdDelete />
								</button>
							</div>
						</div>
					</li>
				))}
			</ul>
		</form>
	);
};

export default ContactList;
