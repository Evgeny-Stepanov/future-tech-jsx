import "./Button.scss";

type ButtonProps = {
	title: string;
	type: "button" | "submit";
};

export const Button = ({ title, type }: ButtonProps) => {
	return (
		<button
			className="button"
			type={type}
		>
			{title}
		</button>
	);
};
