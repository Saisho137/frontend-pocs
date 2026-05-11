import { useState, useEffect, FormEvent, FC } from "react";
import { useAtom } from "jotai";
import { addUserAtom, updateUserAtom } from "../store/userStore";
import { User } from "../models/user.model";

interface UserFormProps {
	selectedUser: User | null;
	onClearSelection: () => void;
}

const UserForm: FC<UserFormProps> = ({ selectedUser, onClearSelection }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [, addUser] = useAtom(addUserAtom);
	const [, updateUser] = useAtom(updateUserAtom);

	useEffect(() => {
		if (selectedUser) {
			setName(selectedUser.name);
			setEmail(selectedUser.email);
			return;
		}
		setName("");
		setEmail("");
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
