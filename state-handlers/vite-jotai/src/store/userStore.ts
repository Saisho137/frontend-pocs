import { atom } from "jotai";
import { User } from "../models/user.model";

export const usersAtom = atom<User[]>([]);

export const addUserAtom = atom(null, (get, set, newUser: Omit<User, "id">) => {
	const users = get(usersAtom);
	set(usersAtom, [...users, { id: Date.now(), ...newUser }]);
});

export const updateUserAtom = atom(null, (get, set, updatedUser: User) => {
	const users = get(usersAtom);
	const index = users.findIndex((user) => user.id === updatedUser.id);

	if (index !== -1) {
		users[index] = updatedUser;
		set(usersAtom, users);
	}
});

export const deleteUserAtom = atom(null, (get, set, id: number) => {
	const users = get(usersAtom);
	set(
		usersAtom,
		users.filter((user) => user.id !== id)
	);
});
