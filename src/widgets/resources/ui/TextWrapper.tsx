import "./TextWrapper.scss";
import { type FC } from "react";
import LinkWithIcon from "@/shared/ui/LinkWithIcon";

type WrapperWithBorderProps = {
	title: string;
	description: string;
	hasImageOrButton?: "image" | "button";
	imageSrc?: string;
	linkTitle?: string;
	href?: string;
};

const WrapperWithBorder: FC<WrapperWithBorderProps> = ({
	title,
	description,
	hasImageOrButton,
	imageSrc,
	linkTitle,
	href,
}) => {
	return (
		<div className="text-wrapper">
			<p>{description}</p>
			<h4 className="h6">{title}</h4>

			{hasImageOrButton === "image" && (
				<div>
					<img
						src={imageSrc}
						alt=""
					/>
				</div>
			)}

			{hasImageOrButton === "button" && (
				<LinkWithIcon
					title={linkTitle!}
					href={href!}
					icon="eye"
					hasBorder
					hasNotRotateAnimation
				/>
			)}
		</div>
	);
};

export default WrapperWithBorder;
