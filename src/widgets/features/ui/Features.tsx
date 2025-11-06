import "./Features.scss";
import TitleWithDescriptionAndIcon from "@/shared/ui/TitleWithDescriptionAndIcon";
import TechBlogIconSVG from "./tech-blog-icon.svg?react";
import ResearchBlogIconSVG from "./research-blog-icon.svg?react";
import SectionHeader from "@/shared/ui/SectionHeader";

const Features = () => {
	return (
		<section className="features">
			<SectionHeader
				preTitle="Unlock the Power of"
				title="FutureTech Features"
			/>
			{/* 			<TitleWithDescriptionAndIcon
				icon={TechBlogIconSVG}
				title="Future Technology Blog"
				description="Stay informed with our blog section dedicated to future technology."
			/> */}
		</section>
	);

	//const TechBlogIcon = <TechBlogIconSVG width={50} height={50}/>

	/* 	 */
};

export default Features;
