import { useState, useEffect, FormEvent, FC } from "react";
import useUserStore from "../store/userStore";
import { User } from "../models/user";

interface UserFormProps {
	selectedUser: User | null;
	onClearSelection: () => void;
}

const UserForm: FC<UserFormProps> = ({ selectedUser, onClearSelection }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const addUser = useUserStore((state) => state.addUser);
	const updateUser = useUserStore((state) => state.updateUser);

	useEffect(() => {
		if (selectedUser) {
			setName(selectedUser.name);
			setEmail(selectedUser.email);
		} else {
			setName("");
			setEmail("");
		}
	}, [selectedUser]);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (selectedUser) {
			updateUser({ id: selectedUser.id, name, email });
		} else {
			addUser({ name, email });
		}
		onClearSelection();
		setName("");
		setEmail("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} required />
			<input
				type="email"
				placeholder="Correo electrónico"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
			<button type="submit">{selectedUser ? "Actualizar Usuario" : "Añadir Usuario"}</button>
			{selectedUser && <button onClick={onClearSelection}>Cancelar</button>}
		</form>
	);
};

export default UserForm;
