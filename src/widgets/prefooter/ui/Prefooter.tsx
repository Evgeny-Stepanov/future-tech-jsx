import "./Prefooter.scss";
import SectionHeader from "@/shared/ui/SectionHeader";
import advantageItems from "../model/advantageItems";
import LinkCard from "@/shared/ui/LinkCard";

const Prefooter = () => {
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
				{advantageItems.map(({ title, description, href }) => (
					<li
						key={title}
						className="prefooter__item"
					>
						<LinkCard
							headingTag="h3"
							href={href}
							title={title}
							description={description}
						/>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Prefooter;
