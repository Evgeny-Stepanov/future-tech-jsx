import "./HeroCards.scss";
import React from "react";
import cardItems from "../model/cardItems";
import LinkCard from "@/shared/ui/LinkCard";
import CardIcon1SVG from "./card-icon-1.svg?react";
import CardIcon2SVG from "./card-icon-2.svg?react";
import CardIcon3SVG from "./card-icon-3.svg?react";

const HeroCards = () => {
	const cardIcons = [
		<CardIcon1SVG
			width={50}
			height={50}
		/>,
		<CardIcon2SVG
			width={50}
			height={50}
		/>,
		<CardIcon3SVG
			width={50}
			height={50}
		/>,
	];

	return (
		<ul className="hero__cards">
			{cardItems.map(({ title, subtitle, description }, index) => (
				<React.Fragment key={title}>
					<li className="hero__cards-item">
						<LinkCard
							icon={cardIcons[index]}
							headingTag="h4"
							href="/"
							title={title}
							subtitle={subtitle}
							description={description}
						/>
					</li>
					{index !== cardItems.length - 1 && (
						<li
							className="hero__cards-item"
							aria-hidden="true"
						></li>
					)}
				</React.Fragment>
			))}
		</ul>
	);
};
export default HeroCards;
