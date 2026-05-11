import { AnimatedLogos } from "@/pages";
import { Icons } from "@/components/icons";
import "./App.scss";
import { Cards } from "./components/scroll-based-animations";

function App() {
	return (
		<>
			<h1>Styles Testing App</h1>
			<Icons.Logo className="logo" />
			<AnimatedLogos />
			<Cards />
		</>
	);
}

export default App;
