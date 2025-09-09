import "./LinkWithArrow.scss";
import ArrowTopRight from "./arrow-top-right.svg?react";

type LinkWithArrowProps = {
	title: string;
	href: string;
};

export const LinkWithArrow = ({ title, href }: LinkWithArrowProps) => {
	return (
		<a
			href={href}
			target="_blank"
			className="link link--has-hover-animation"
		>
			{title}
			<ArrowTopRight
				className="link__icon"
				width={24}
				height={24}
				aria-hidden="true"
			/>
		</a>
	);
};
