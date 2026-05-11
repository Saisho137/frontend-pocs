import { create } from "zustand";

interface User {
	id: number;
	name: string;
	email: string;
}

interface UserStore {
	users: User[];
	addUser: (user: Omit<User, "id">) => void;
	updateUser: (user: User) => void;
	deleteUser: (id: number) => void;
}

const useUserStore = create<UserStore>((set) => ({
	users: [],

	addUser: (user) =>
		set((state) => ({
			users: [...state.users, { id: Date.now(), ...user }],
		})),

	updateUser: (updatedUser) =>
		set((state) => ({
			users: state.users.map((user) => (user.id === updatedUser.id ? updatedUser : user)),
		})),

	deleteUser: (id) =>
		set((state) => ({
			users: state.users.filter((user) => user.id !== id),
		})),
}));

export default useUserStore;
