import React from "react";
import { Text } from "./Text";

const App = () => {
	return (
		<div>
			<Text as="h1" size="lg">
				Heading
			</Text>
			<Text as="p" size="md">
				Paragraph
			</Text>
			<Text as="label" size="sm" color="secondary">
				Label
			</Text>
		</div>
	);
};

export default App;
