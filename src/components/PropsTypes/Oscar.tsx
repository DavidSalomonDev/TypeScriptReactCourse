type OscarProps = {
	children: React.ReactNode; //Child as another React component
};

const Oscar = (props: OscarProps) => {
	return <div>{props.children}</div>;
};

export default Oscar;
