import "./TitleWithDescriptionAndIcon.scss";
import { type FC, type ReactElement } from "react";

type TitleWithDescriptionAndIconProps = {
	icon: ReactElement;
	title: string;
	description: string;
};

const TitleWithDescriptionAndIcon: FC<TitleWithDescriptionAndIconProps> = ({
	icon,
	title,
	description,
}) => {
	return (
		<div className="title-wrapper">
			{icon}
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
};

export default TitleWithDescriptionAndIcon;
