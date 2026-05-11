import { FC, useEffect, useState } from "react";

const ThemeToggle: FC = () => {
	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		console.log("new Theme: ", newTheme);

		document.documentElement.setAttribute("data-theme", newTheme);
		localStorage.setItem("theme", newTheme);
	};

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		console.log("Saved storage: ", savedTheme);

		if (savedTheme) {
			setTheme(savedTheme);
			document.documentElement.setAttribute("data-theme", savedTheme);
		} else {
			const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
            
			const defaultTheme = prefersDarkScheme ? "dark" : "light";
			console.log("Preference: ", defaultTheme);
			setTheme(defaultTheme);
			document.documentElement.setAttribute("data-theme", defaultTheme);
		}
	}, []);

	return (
		<div>
			<button onClick={toggleTheme}>{theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}</button>
		</div>
	);
};

export default ThemeToggle;
