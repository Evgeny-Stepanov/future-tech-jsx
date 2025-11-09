import "./Features.scss";
import TitleWithDescriptionAndIcon from "@/shared/ui/TitleWithDescriptionAndIcon";
import {
	techBlogFeatureItems,
	insightBlogFeatureItems,
} from "../model/featureItems";
import TechBlogIconSVG from "./tech-blog-icon.svg?react";
import InsightBlogIconSVG from "./insight-blog-icon.svg?react";
import SectionHeader from "@/shared/ui/SectionHeader";

const Features = () => {
	const TechBlogIcon = (
		<TechBlogIconSVG
			width={80}
			height={80}
		/>
	);
	const InsightBlogIcon = (
		<InsightBlogIconSVG
			width={93}
			height={80}
		/>
	);

	return (
		<section className="features">
			<SectionHeader
				preTitle="Unlock the Power of"
				title="FutureTech Features"
			/>
			<div className="features__row">
				<div className="features__column">
					<TitleWithDescriptionAndIcon
						icon={TechBlogIcon}
						title="Future Technology Blog"
						description="Stay informed with our blog section dedicated to future technology."
					/>
				</div>

				<div className="features__column">
					<ul className="features__list">
						{techBlogFeatureItems.map(({ title, description }) => (
							<li
								key={title}
								className="features__item"
							>
								<h4 className="h5">{title}</h4>
								<p>{description}</p>
							</li>
						))}
					</ul>
				</div>
			</div>

			<div className="features__row">
				<div className="features__column">
					<TitleWithDescriptionAndIcon
						icon={InsightBlogIcon}
						title="Research Insights Blogs"
						description="Dive deep into future technology concepts with our research section."
						isIconWider
					/>
				</div>

				<div className="features__column">
					<ul className="features__list">
						{insightBlogFeatureItems.map(({ title, description }) => (
							<li
								key={title}
								className="features__item"
							>
								<h4 className="h5">{title}</h4>
								<p>{description}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Features;
