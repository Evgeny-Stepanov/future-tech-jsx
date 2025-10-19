import "./Prefooter.scss";
import SectionHeader from "@/shared/ui/SectionHeader";
import ArrowTopRightSVG from "@/shared/ui/LinkWithIcon/ui/arrow-top-right.svg?react";
import advantagesItems from "../model/advantagesItems";

const Prefooter = () => {
	const toggleListItemYellowBorder = (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		const parentLi = event.currentTarget.closest(".prefooter__item");
		parentLi!.classList.toggle("prefooter__item--has-yellow-border");
	};

	const handleMouseOver = (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		toggleListItemYellowBorder(event);
	};

	const handleMouseOut = (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		toggleListItemYellowBorder(event);
	};

	return (
		<section className="prefooter container">
			<SectionHeader
				preTitle="Learn, Connect, and Innovate"
				title="Be Part of the Future Tech Revolution"
				hasLogo
				descriptionForDesktop="Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers."
				descriptionForMobile="Immerse yourself in the world of future technology. Explore our comprehensive resources."
			/>

			<ul className="prefooter__list">
				{advantagesItems.map(({ title, description, href }) => (
					<li
						key={title}
						className="prefooter__item"
					>
						<div>
							<h3 id={title}>{title}</h3>

							<a
								href={href}
								className="prefooter__link"
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
					</li>
				))}
			</ul>
		</section>
	);
};

export default Prefooter;
