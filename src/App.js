import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddContact from "./components/AddContact";
import api from "./fetchContacts/fetchItems";
import EditContact from "./components/EditContact";

function App() {
	const [contacts, setContacts] = useState([]);
<<<<<<< HEAD
=======
	const [search, setSearch] = useState("");
>>>>>>> 036d783 (allow edit and search)

	useEffect(() => {
		const fetchContacts = async () => {
			const response = await api.get("/contacts");
			setContacts(response.data);
		};

		fetchContacts();
	}, []);

	return (
		<Router>
			<div className="App">
				<Routes>
					<Route
						path="/"
						element={
							<>
<<<<<<< HEAD
								<Header />
								<ContactList
									contacts={contacts}
=======
								<Header search={search} setSearch={setSearch} />
								<ContactList
									contacts={contacts.filter(
										(contact) =>
											contact.name
												.toLowerCase()
												.includes(search.toLowerCase()) ||
											contact.email
												.toLowerCase()
												.includes(search.toLowerCase())
									)}
>>>>>>> 036d783 (allow edit and search)
									setContacts={setContacts}
								/>
							</>
						}
					/>

					<Route
						path="/new-contact"
						element={
							<AddContact
								contacts={contacts}
								setContacts={setContacts}
							/>
						}
					/>

					<Route
						path="/contacts/:id"
<<<<<<< HEAD
						element={<EditContact contacts={contacts} />}
=======
						element={
							<EditContact
								contacts={contacts}
								setContacts={setContacts}
							/>
						}
>>>>>>> 036d783 (allow edit and search)
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
