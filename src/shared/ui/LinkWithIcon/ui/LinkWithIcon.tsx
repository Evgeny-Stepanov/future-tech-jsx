import "./LinkWithIcon.scss";
import { type FC } from "react";
import ArrowTopRightSVG from "./arrow-top-right.svg?react";
import EyeSVG from "./eye.svg?react";
import classNames from "classnames";

type LinkWithIconProps = {
	icon?: "arrow" | "eye";
	hasBorder?: true;
	hasNotRotateAnimation?: true;
	title: string;
	href: string;
	ariaLabelledby?: string;
};

const LinkWithIcon: FC<LinkWithIconProps> = ({
	icon = "arrow",
	hasBorder,
	hasNotRotateAnimation,
	title,
	href,
	ariaLabelledby,
}) => {
	return (
		<a
			href={href}
			target="_blank"
			className={classNames("link", {
				"link--has-icon-rotate-animation": !hasNotRotateAnimation,
				"link--has-border": hasBorder,
			})}
			aria-labelledby={ariaLabelledby}
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
