import { FC, useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { User } from "./models/user";

const App: FC = () => {
	const [selectedUser, setSelectedUser] = useState<User | null>(null);

	const handleSelectUser = (user: User) => {
		setSelectedUser(user);
	};

	const handleClearSelection = () => {
		setSelectedUser(null);
	};

	return (
		<div>
			<h1>Gestión de Usuarios</h1>
			<UserForm selectedUser={selectedUser} onClearSelection={handleClearSelection} />
			<UserList onSelectUser={handleSelectUser} />
		</div>
	);
};

export default App;
