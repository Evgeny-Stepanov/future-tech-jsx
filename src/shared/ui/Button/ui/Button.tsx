import "./Button.scss";
import { type FC } from "react";

type ButtonProps = {
	mode: "link" | "button";
	title: string;
	type?: "button" | "submit";
	href?: string;
};

const Button: FC<ButtonProps> = ({ mode, title, type, href }) => {
	const Link = (
		<a
			className="button"
			href={href}
		>
			{title}
		</a>
	);

	const Button = (
		<button
			className="button"
			type={type}
		>
			{title}
		</button>
	);

	return mode === "link" ? Link : Button;
};

export default Button;
