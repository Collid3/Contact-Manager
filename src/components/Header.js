import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = ({ search, setSearch }) => {
	return (
		<header className="header-container">
			<h1>Contact Manager</h1>

			<div className="add-contact">
				<h2>Contact List</h2>
				<Link to="/new-contact">
					<button>Add Contact</button>
				</Link>
			</div>

			<div className="search-contact">
				<input
					type="search"
					placeholder="Search for a contact here"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>

				{!search && (
					<span title="search">
						<AiOutlineSearch />
					</span>
				)}
			</div>
		</header>
	);
};

export default Header;
