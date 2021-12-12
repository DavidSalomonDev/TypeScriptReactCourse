import { ThemeContextProvider } from "./context/ThemeContext";
import { Box } from "./context/Box";
import { UserContextProvider } from "./context/UserContext";
import { User } from "./context/User";
import "./App.css";

const ContextApp = () => {
	return (
		<div className="App">
			<UserContextProvider>
				<ThemeContextProvider>
					<User />
					<Box />
				</ThemeContextProvider>
			</UserContextProvider>
		</div>
	);
};

export default ContextApp;
