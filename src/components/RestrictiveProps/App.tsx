import React from "react";
import { RandomNumber } from "./RandomNumber";

const App = () => {
	return (
		<div>
			<RandomNumber value={10} isPositive />
		</div>
	);
};

export default App;
