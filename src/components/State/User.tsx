import React, { useState } from "react";

type AuthUser = {
	name: string;
	email: string;
};

const User = () => {
	const [user, setUser] = useState<AuthUser | null>(null); //future values for state
	//const [user, setUser] = useState<AuthUser>({} as AuthUser); // Type Assertion if the user will never be null
	const handleLogin = () => {
		setUser({
			name: "David",
			email: "david@example.com",
		});
	};
	const handleLogout = () => {
		setUser(null);
	};
	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>
			<div>User name is {user?.name}</div>
			<div>User email is {user?.email}</div>
		</div>
	);
};

export default User;
