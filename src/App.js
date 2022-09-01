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
								<Header />
								<ContactList
									contacts={contacts}
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
						element={<EditContact contacts={contacts} />}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
