import "./LinkWithIcon.scss";
import { type FC } from "react";
import ArrowTopRightSVG from "./arrow-top-right.svg?react";
import EyeSVG from "./eye.svg?react";
import classNames from "classnames";

type LinkWithIconProps = {
	title: string;
	href: string;
	icon?: "arrow" | "eye";
	hasBorder?: true;
	hasNotRotateAnimation?: true;
	hasGrayBackground?: true;
};

const LinkWithIcon: FC<LinkWithIconProps> = ({
	title,
	href,
	icon = "arrow",
	hasBorder,
	hasNotRotateAnimation,
	hasGrayBackground,
}) => {
	return (
		<a
			href={href}
			target="_blank"
			className={classNames("link", {
				"link--has-icon-rotate-animation": !hasNotRotateAnimation,
				"link--has-border": hasBorder,
				"link--has-gray-background": hasGrayBackground,
			})}
		>
			<span>{title}</span>

			<div>
				{icon === "arrow" && (
					<ArrowTopRightSVG
						width={24}
						height={24}
						aria-hidden="true"
					/>
				)}

				{icon === "eye" && (
					<EyeSVG
						width={24}
						height={24}
						aria-hidden="true"
					/>
				)}
			</div>
		</a>
	);
};

export default LinkWithIcon;
