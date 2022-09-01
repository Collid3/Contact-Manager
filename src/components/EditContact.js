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
	}

	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<p>
				<label htmlFor="">Name: </label>
				<input type="text" />
			</p>

			<p>
				<label htmlFor="">Name: </label>
				<input type="text" />
			</p>
			<div className="buttons">
				<button onClick={handleUpdate}>Update</button>
				<button onClick={handleCancel}>Cancel</button>
			</div>
		</form>
	);
};

export default EditContact;
