import "./LinkWithArrow.scss";
import ArrowTopLeft from "./arrow-top-right.svg?react";

export const LinkWithArrow = props => {
	const { children, href = "/" } = props;

	return (
		<a
			href={href}
			target="_blank"
			className="link link--has-underline-animation"
		>
			{children}
			<ArrowTopLeft
				className="link__icon"
				width={24}
				height={24}
			/>
		</a>
	);
};
