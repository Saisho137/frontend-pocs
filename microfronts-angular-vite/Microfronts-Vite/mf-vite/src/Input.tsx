import { ChangeEvent, FC, FormEvent } from "react";

interface Props {
	value?: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const Input: FC<Props> = ({ value = "", onChange, onSubmit }) => {
	return (
		<form
			onSubmit={(event) => {
				onSubmit?.(event);
			}}>
			<div className="flex-row">
				<input type="text" value={value} onChange={(event) => onChange?.(event)} />
				<button type="submit">Add</button>
			</div>
		</form>
	);
};

export default Input;
