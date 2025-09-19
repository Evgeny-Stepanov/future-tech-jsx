import "./Button.scss";
import { type FC } from "react";

type ButtonProps = {
	mode: "link" | "button";
	href?: string;
	type?: "button" | "submit";
	title: string;
};

const Button: FC<ButtonProps> = (props) => {
	const { mode, href, type, title } = props;

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
