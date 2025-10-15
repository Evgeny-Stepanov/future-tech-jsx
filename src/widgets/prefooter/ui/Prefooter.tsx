import "./Prefooter.scss";
import SectionTitle from "@/shared/ui/SectionTitle";

const Prefooter = () => {
	return (
		<section className="prefooter container">
			<SectionTitle
				preTitle="Learn, Connect, and Innovate"
				title="Be Part of the Future Tech Revolution"
				hasLogo
				descriptionForDesktop="Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers."
				descriptionForMobile="Immerse yourself in the world of future technology. Explore our comprehensive resources."
			/>
		</section>
	);
};

export default Prefooter;
