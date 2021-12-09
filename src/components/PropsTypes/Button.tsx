// 6 - Event props onClick

type ButtonProps = {
	handleClick: (
		event: React.MouseEvent<HTMLButtonElement>,
		id: number
	) => void; // Function that doesn't return anything
};

import React from "react";

const Button = (props: ButtonProps) => {
	return <button onClick={(e) => props.handleClick(e, 1)}>Click</button>;
};

export default Button;
