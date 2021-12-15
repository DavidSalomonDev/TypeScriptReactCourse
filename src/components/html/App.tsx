import React from "react";
import { CustomButton } from "./Button";

const App = () => {
	return (
		<div>
			<CustomButton
				variant="primary"
				onClick={() => console.log("clicked")}
			>
				Hey
			</CustomButton>
		</div>
	);
};

export default App;
