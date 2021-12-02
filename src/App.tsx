import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";

function App() {
	const personName = {
		first: "David",
		last: "Salomon",
	};

	const nameList = [
		{
			first: "Julio",
			last: "Son",
		},
		{
			first: "Will",
			last: "Smith",
		},
		{
			first: "Roger",
			last: "Federer",
		},
	];

	return (
		<div className="App">
			<Greet name="David" messageCount={11} isLoggedIn={false} />
			<Person name={personName} />
			<PersonList names={nameList} />
			<hr />
			<Status status="success" />
			<Heading>Placeholder text</Heading>
			<Oscar>
				<Heading>This is Oscar</Heading>
			</Oscar>
			<Greet name="Robert" isLoggedIn={true} />
		</div>
	);
}

export default App;
