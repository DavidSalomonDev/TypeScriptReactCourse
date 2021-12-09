// 7 - Styles as props

import React from "react";

type ContainerProps = {
	styles: React.CSSProperties;
};

const Container = (props: ContainerProps) => {
	return <div style={props.styles}>Content</div>;
};

export default Container;
