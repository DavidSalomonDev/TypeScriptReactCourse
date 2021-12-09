// 4 - Basic props

// You can import and export types
import { PersonProps } from "./Person.types";

// Destructure props is recommended
const Person = ({ name }: PersonProps) => {
	return (
		<div>
			<h3>
				{name.first} {name.last}
			</h3>
		</div>
	);
};

export default Person;
