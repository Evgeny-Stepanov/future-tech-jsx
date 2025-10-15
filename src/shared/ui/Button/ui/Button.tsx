import "./Button.scss";
import { type FC } from "react";

type ButtonProps = {
	title: string;
	type: "button" | "submit";
};

const Button: FC<ButtonProps> = ({ title, type }) => {
	return (
		<button
			className="button"
			type={type}
		>
			{title}
		</button>
	);
};

export default Button;
