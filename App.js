import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation";
import { StatusBar } from "react-native";
import { AuthProvider } from "./src/context/AuthContext"
export default function App() {
	return (
		<NavigationContainer>
			<AuthProvider>
			<StatusBar />
			<Navigation />
			</AuthProvider>
		</NavigationContainer>
	);
}
