import SectionHeader from "@/shared/ui/SectionHeader";
import "./Resources.scss";
import LeadMagnet from "@/entities/LeadMagnet";

const Resources = () => {
	return (
		<section className="resources">
			<SectionHeader
				preTitle="Your Gateway to In-Depth Information"
				title="Unlock Valuable Knowledge with FutureTech's Resources"
				linkTitle="View All Resources"
				href="/"
			/>

			<ul className="resources__list">
				<li className="resources__item">
					<LeadMagnet content="ebooks" />
				</li>
				<li className="resources__item">
					<LeadMagnet content="whitepapers" />
				</li>
			</ul>
		</section>
	);
};

export default Resources;
