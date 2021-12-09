import React from "react";
import "./App.css";
import Greet from "./components/PropsTypes/Greet";
import Person from "./components/PropsTypes/Person";
import PersonList from "./components/PropsTypes/PersonList";
import Status from "./components/PropsTypes/Status";
import Heading from "./components/PropsTypes/Heading";
import Oscar from "./components/PropsTypes/Oscar";
import Button from "./components/PropsTypes/Button";
import Input from "./components/PropsTypes/Input";
import Container from "./components/PropsTypes/Container";

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
			<Container
				styles={{ border: "1px solid black", padding: "1rem" }}
			/>
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
			<hr />
			<Button
				handleClick={(event, id) =>
					console.log("button clicked", event, id)
				}
			/>
			<Input value="" handleChange={(e) => console.log(e)} />
		</div>
	);
}

export default App;
