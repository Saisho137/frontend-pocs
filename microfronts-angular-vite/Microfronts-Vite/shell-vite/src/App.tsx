import { ChangeEvent, FC, FormEvent, lazy, Suspense, useState } from "react";

// const MfAngular14 = lazy(() => import("products/ProductsIndex"));
// const MfAngular17 = lazy(() => import("mfAngular17/Module"));
// const Products = lazy(() => import("products/ProductsIndex"));

interface Props {
	name?: string;
}

interface InputProps {
	value?: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const RemoteComponent: FC<Props> = lazy(() => import("remoteApp/RemoteComponent"));
const Input: FC<InputProps> = lazy(() => import("remoteApp/Input"));

function App() {
	const [inputValue, setInputValue] = useState<string>("");

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		alert(`Submitted value: ${inputValue}`);
	};

	return (
		<div>
			<h1>Contenedor Vite con Microfrontends de Angular</h1>
			{/* <Suspense fallback={<div>Cargando Angulars...</div>}>
				<MfAngular14 />
				<MfAngular17 />
			</Suspense> */}
			<Suspense fallback={<div>Cargando mf puro...</div>}>
				<RemoteComponent name={"Santiago"} />
				<Input value={inputValue} onChange={handleInputChange} onSubmit={handleFormSubmit} />
			</Suspense>
		</div>
	);
}

export default App;
