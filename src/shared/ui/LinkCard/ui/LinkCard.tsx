import "./LinkCard.scss";
import { type ElementType, type FC, type ReactElement } from "react";
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
	const getListItemWithBorder = (
		event:
			| React.MouseEvent<HTMLAnchorElement, MouseEvent>
			| React.FocusEvent<HTMLAnchorElement>
	) => {
		const listItem = event.currentTarget.closest("li") as HTMLElement;

		const computedStylesParentLi = window.getComputedStyle(listItem!);
		const hasBorder = !computedStylesParentLi.border.includes("none");

		return [listItem, hasBorder] as const;
	};

	const handleMouseOver = (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		const [listItem, hasBorder] = getListItemWithBorder(event);

		if (hasBorder) {
			listItem.classList.toggle("has-yellow-border");
		}
	};

	const handleMouseOut = (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		const [listItem, hasBorder] = getListItemWithBorder(event);

		if (hasBorder) {
			listItem!.classList.toggle("has-yellow-border");
		}
	};

	const handleFocus = (event: React.FocusEvent<HTMLAnchorElement>) => {
		const [listItem, hasBorder] = getListItemWithBorder(event);

		if (hasBorder) {
			listItem!.classList.add("has-yellow-border");
		}
	};

	const handleBlur = (event: React.FocusEvent<HTMLAnchorElement>) => {
		const [listItem, hasBorder] = getListItemWithBorder(event);

		if (hasBorder) {
			listItem!.classList.remove("has-yellow-border");
		}
	};

	if (headingTag === "h6" && subtitle) {
		throw new Error(
			"The subtitle depends on the parent and is equal to <h> - 1. There is no level 7 heading in HTML."
		);
	}

	const HeadingTag = headingTag;
	const SubheadingTag = `h${+headingTag.at(-1)! + 1}` as ElementType;

	return (
		<div className="link-card">
			{icon}

			<div>
				{subtitle ? (
					<div className="link-card__title-group">
						<HeadingTag className="h6">{title}</HeadingTag>
						<SubheadingTag>{subtitle}</SubheadingTag>
					</div>
				) : (
					<HeadingTag>{title}</HeadingTag>
				)}

				<a
					href={href}
					className="link-card__link"
					aria-label={title}
					onMouseOver={handleMouseOver}
					onMouseOut={handleMouseOut}
					onFocus={handleFocus}
					onBlur={handleBlur}
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
