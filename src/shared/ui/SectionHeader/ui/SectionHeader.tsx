import "./SectionHeader.scss";
import { type FC } from "react";
import LogoWithoutTextSVG from "./logo-without-text.svg?react";
import LinkWithIcon from "../../LinkWithIcon";
import { mobileMediaWidth } from "@/shared/config/mediaWidthVariables";

type SectionHeaderProps = {
	preTitle: string;
	title: string;
	hasLogo?: true;
	descriptionForDesktop?: string;
	descriptionForMobile?: string;
	linkTitle?: string;
	href?: string;
};

const SectionHeader: FC<SectionHeaderProps> = ({
	preTitle,
	title,
	hasLogo,
	descriptionForDesktop,
	descriptionForMobile,
	linkTitle,
	href,
}) => {
	return (
		<header className="section-header">
			{hasLogo && (
				<div className="section-header__logo">
					<LogoWithoutTextSVG
						width={150}
						height={150}
						aria-hidden="true"
					/>
				</div>
			)}

			<span className="section-header__pre-title">{preTitle}</span>
			<h2 className="section-header__title">{title}</h2>

			{descriptionForDesktop && (
				<p className="section-header__description">
					{mobileMediaWidth ? descriptionForMobile : descriptionForDesktop}
				</p>
			)}

			{linkTitle && (
				<LinkWithIcon
					title={linkTitle}
					href={href as string}
					hasBorder
				/>
			)}
		</header>
	);
};

export default SectionHeader;
