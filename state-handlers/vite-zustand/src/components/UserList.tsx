import { FC } from "react";
import useUserStore from "../store/userStore";
import { User } from "../models/user";

interface UserListProps {
	onSelectUser: (user: User) => void;
}

const UserList: FC<UserListProps> = ({ onSelectUser }) => {
	const users = useUserStore((state) => state.users);
	const deleteUser = useUserStore((state) => state.deleteUser);

	return (
		<ul>
			{users.length > 0 ? (
				users.map((user) => (
					<li key={user.id}>
						<div>
							<strong>{user.name}</strong> - {user.email}
						</div>
						<button onClick={() => onSelectUser(user)}>Editar</button>
						<button onClick={() => deleteUser(user.id)}>Eliminar</button>
					</li>
				))
			) : (
				<p>No hay usuarios agregados.</p>
			)}
		</ul>
	);
};

export default UserList;
