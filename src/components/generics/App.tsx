import React from "react";
import { List } from "./List";

const App = () => {
	return (
		<div>
			<List
				items={["batman", "superman", "spiderman"]}
				onClick={(item) => console.log(item)}
			/>
		</div>
	);
};

export default App;
