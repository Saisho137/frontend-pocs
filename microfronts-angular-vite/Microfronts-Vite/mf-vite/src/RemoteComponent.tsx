import { FC } from "react";

interface Props {
	name?: string;
}

const RemoteComponent: FC<Props> = ({ name = "Saisho" }) => {
	return <h2>Hola {name}!, saludos desde el Microfrontend Remoto!</h2>;
};

export default RemoteComponent;
