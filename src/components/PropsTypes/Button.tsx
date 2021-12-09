// 6 - Event props onClick
import React from "react";

type ButtonProps = {
	handleClick: (
		event: React.MouseEvent<HTMLButtonElement>,
		id: number
	) => void; // Function that doesn't return anything
};

const Button = (props: ButtonProps) => {
	return <button onClick={(e) => props.handleClick(e, 1)}>Click</button>;
};

export default Button;
