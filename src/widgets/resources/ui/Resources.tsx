import "./Resources.scss";
import SectionHeader from "@/shared/ui/SectionHeader";
import resourceItems from "../model/resourceItems";
import TitleWithDescriptionAndIcon from "@/shared/ui/TitleWithDescriptionAndIcon";
import LinkWithIcon from "@/shared/ui/LinkWithIcon";
import TextWrapper from "./TextWrapper";

const resourcesIcons = import.meta.glob("./*.svg", {
	query: "?react",
	import: "default",
	eager: true,
}) as Record<string, React.FC<React.SVGProps<SVGSVGElement>>>;

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
				{resourceItems.map((item) => {
					const IconComponent = resourcesIcons[item.leftColumn.iconPath];

					return (
						<li
							className="resources__item"
							key={item.leftColumn.title}
						>
							<div className="resources__left-column">
								<TitleWithDescriptionAndIcon
									icon={
										IconComponent ? (
											<IconComponent
												width={80}
												height={80}
												aria-hidden="true"
											/>
										) : null
									}
									title={item.leftColumn.title}
									description={item.leftColumn.description}
								/>

								<LinkWithIcon
									title={item.leftColumn.buttonText}
									href="/"
									hasBorder
									hasGrayBackground
								/>

								<TextWrapper
									description="Downloaded By"
									title="10k+ Users"
									hasImageOrButton="image"
									imageSrc={item.leftColumn.usersImageSrc}
								/>
							</div>

							<div className="resources__right-column">
								<div className="resources__right-column-header">
									<h4>{item.rightColumn.title}</h4>
									<p>{item.rightColumn.description}</p>
								</div>

								<div className="resources__right-column-image">
									<img
										src={item.rightColumn.imageSrc}
										alt={item.rightColumn.imageAlt}
									/>
								</div>

								<TextWrapper
									title={item.rightColumn.totalNumber}
									description={item.rightColumn.totalDescription}
								/>

								<TextWrapper
									title="PDF format for access."
									description="Download Formats"
									hasImageOrButton="button"
									linkTitle="Preview"
									href="/"
								/>

								<TextWrapper
									title={item.rightColumn.authorExpertise}
									description="Average Author Expertise"
								/>
							</div>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default Resources;
