import "./LinkCard.scss";
import { type FC, type ReactElement } from "react";
import ArrowTopRightSVG from "@/shared/ui/LinkWithIcon/ui/arrow-top-right.svg?react";

type LinkCardProps = {
	icon?: ReactElement;
	headingTag: "h3" | "h4" | "h5" | "h6";
	href: string;
	title: string;
	subtitle?: string;
	description: string;
};

const LinkCard: FC<LinkCardProps> = ({
	icon,
	headingTag,
	href,
	title,
	subtitle,
	description,
}) => {
	const toggleCardYellowBorder = (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		const parentLi = event.currentTarget.closest("li");

		const computedStyleParentLi = window.getComputedStyle(parentLi!);
		const hasBorder = !computedStyleParentLi.border.includes("none");

		if (hasBorder) {
			parentLi!.classList.toggle("has-yellow-border");
		}
	};

	const handleMouseOver = (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		toggleCardYellowBorder(event);
	};

	const handleMouseOut = (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		toggleCardYellowBorder(event);
	};

	if (headingTag === "h6" && subtitle) {
		throw new Error(
			"The subtitle depends on the parent and is equal to <h> - 1. There is no level 7 heading in HTML."
		);
	}

	const HeadingTag = headingTag;
	const SubheadingTag = `h${+headingTag.at(-1)! + 1}`;

	return (
		<div className="link-card">
			{icon}

			<div>
				{subtitle ? (
					<div className="link-card__title-group">
						<HeadingTag
							id={title}
							className="h6"
						>
							{title}
						</HeadingTag>
						{/* @ts-expect-error: It is unclear why it does not complain about the top component, but complains about this one.... */}
						<SubheadingTag>{subtitle}</SubheadingTag>
					</div>
				) : (
					<HeadingTag id={title}>{title}</HeadingTag>
				)}

				<a
					href={href}
					className="link-card__link"
					aria-labelledby={title}
					onMouseOver={handleMouseOver}
					onMouseOut={handleMouseOut}
				>
					<ArrowTopRightSVG
						width={24}
						height={24}
						aria-hidden="true"
					/>
				</a>
			</div>

			<p>{description}</p>
		</div>
	);
};

export default LinkCard;
