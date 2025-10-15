import "./SectionTitle.scss";
import { type FC } from "react";
import LogoWithoutTextSVG from "./logo-without-text.svg?react";
import LinkWithIcon from "../../LinkWithIcon";

type SectionTitleProps = {
	preTitle: string;
	title: string;
	hasLogo?: true;
	descriptionForDesktop?: string;
	descriptionForMobile?: string;
	linkTitle?: string;
	href?: string;
};

const SectionTitle: FC<SectionTitleProps> = ({
	preTitle,
	title,
	hasLogo,
	descriptionForDesktop,
	descriptionForMobile,
	linkTitle,
	href,
}) => {
	const mobileMediaWidth = window.matchMedia("(width <= 480px)").matches;

	return (
		<header className="section__header">
			{hasLogo && (
				<div className="section__logo">
					<LogoWithoutTextSVG
						width={150}
						height={150}
						aria-hidden="true"
					/>
				</div>
			)}

			<span className="section__pre-title">{preTitle}</span>
			<h2 className="section__title">{title}</h2>

			{mobileMediaWidth ? (
				<p className="section__description">{descriptionForMobile}</p>
			) : (
				<p className="section__description">{descriptionForDesktop}</p>
			)}

			{linkTitle && (
				<LinkWithIcon
					title={linkTitle}
					href={href as string}
				/>
			)}
		</header>
	);
};

export default SectionTitle;
