// 3 - Typing props

type GreetProps = {
	name: string;
	messageCount?: number; // optional prop
	isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
	const { messageCount = 0 } = props;
	return (
		<div>
			{props.isLoggedIn ? (
				<h2>
					Welcome {props.name}! You have {messageCount} unread
					messages
				</h2>
			) : (
				<h2>Welcome Guest</h2>
			)}
		</div>
	);
};

export default Greet;
