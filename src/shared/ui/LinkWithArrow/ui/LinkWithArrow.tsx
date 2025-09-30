import "./LinkWithArrow.scss";
import { type FC } from "react";
import ArrowTopRightSVG from "./arrow-top-right.svg?react";

type LinkWithArrowProps = {
	title: string;
	href: string;
};

const LinkWithArrow: FC<LinkWithArrowProps> = ({ title, href }) => {
	return (
		<a
			href={href}
			target="_blank"
			className="link link--has-hover-animation"
		>
			{title}
			<ArrowTopRightSVG
				className="link__icon"
				width={24}
				height={24}
				aria-hidden="true"
			/>
		</a>
	);
};

export default LinkWithArrow;
