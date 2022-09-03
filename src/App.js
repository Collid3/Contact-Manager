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
	const [search, setSearch] = useState("");

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
						element={
							<EditContact
								contacts={contacts}
								setContacts={setContacts}
							/>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
