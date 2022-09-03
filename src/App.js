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
<<<<<<< HEAD
=======
	const [search, setSearch] = useState("");
>>>>>>> 036d783 (allow edit and search)
=======

	const [search, setSearch] = useState("");
>>>>>>> cd522b1... fixed git pull errors and add contact bug

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
<<<<<<< HEAD
								<Header />
								<ContactList
									contacts={contacts}
=======
								<Header search={search} setSearch={setSearch} />
=======
								<Header search={search} setSearch={setSearch} />

>>>>>>> cd522b1... fixed git pull errors and add contact bug
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
<<<<<<< HEAD
>>>>>>> 036d783 (allow edit and search)
=======
>>>>>>> cd522b1... fixed git pull errors and add contact bug
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
<<<<<<< HEAD
						element={<EditContact contacts={contacts} />}
=======
=======
>>>>>>> cd522b1... fixed git pull errors and add contact bug
						element={
							<EditContact
								contacts={contacts}
								setContacts={setContacts}
							/>
						}
<<<<<<< HEAD
>>>>>>> 036d783 (allow edit and search)
=======
>>>>>>> cd522b1... fixed git pull errors and add contact bug
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
