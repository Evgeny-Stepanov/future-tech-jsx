import "./TitleWithDescriptionAndIcon.scss";
import { type FC, type ReactNode } from "react";
import classNames from "classnames";

type TitleWithDescriptionAndIconProps = {
	icon: ReactNode;
	title: string;
	description: string;
	isIconWider?: true;
};

const TitleWithDescriptionAndIcon: FC<TitleWithDescriptionAndIconProps> = ({
	icon,
	title,
	description,
	isIconWider,
}) => {
	return (
		<div className="title-wrapper">
			<div
				className={classNames("title-wrapper__icon", {
					"title-wrapper__icon--is-wide": isIconWider,
				})}
			>
				{icon}
			</div>
			<h3 className="title-wrapper__title">{title}</h3>
			<p>{description}</p>
		</div>
	);
};

export default TitleWithDescriptionAndIcon;
