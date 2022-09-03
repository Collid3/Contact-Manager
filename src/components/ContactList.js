import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import api from "../fetchContacts/fetchItems";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
import { Link, useNavigate } from "react-router-dom";
>>>>>>> cd522b1... fixed git pull errors and add contact bug

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
<<<<<<< HEAD
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
=======
			{contacts.length > 0 && (
				<ul>
					{contacts.map((contact) => (
						<li className="contact" key={contact.id}>
							<div className="contact-picture">
								<BsFillPersonFill />
							</div>

							<div className="contact-details">
								<div className="contact-info">
									<h4 className="contact-name">{contact.name}</h4>
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
			)}

			{!contacts.length && (
				<p
					className="empty-list"
					style={{
						marginTop: "2rem",
						textAlign: "center",
						color: "red",
					}}
				>
					No contact to display...Add&nbsp;
					<Link to="/new-contact">New Contact</Link>
				</p>
			)}
>>>>>>> cd522b1... fixed git pull errors and add contact bug
		</form>
	);
};

export default ContactList;
