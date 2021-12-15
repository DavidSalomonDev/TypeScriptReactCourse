import React from "react";
import Greet from "../PropsTypes/Greet";

const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
	//you can know the props types from other components you don't have access to
	return <div>{props.isLoggedIn}</div>;
};

export default CustomComponent;
