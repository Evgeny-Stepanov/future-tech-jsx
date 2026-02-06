import "./Features.scss";
import TitleWithDescriptionAndIcon from "@/shared/ui/TitleWithDescriptionAndIcon";
import featureItems from "../model/featureItems";
import SectionHeader from "@/shared/ui/SectionHeader";

const featuresIcons = import.meta.glob("./*.svg", {
	query: "?react",
	import: "default",
	eager: true,
}) as Record<string, React.FC<React.SVGProps<SVGSVGElement>>>;

const Features = () => {
	return (
		<section className="features">
			<SectionHeader
				preTitle="Unlock the Power of"
				title="FutureTech Features"
			/>

			{featureItems.map((item) => {
				const {
					iconPath,
					title,
					description,
					iconWidth = 80,
					iconHeight = 80,
					isIconWider = undefined,
				} = item.leftColumn;

				const IconComponent = featuresIcons[iconPath];

				return (
					<div
						className="features__row"
						key={title}
					>
						<div className="features__column">
							<TitleWithDescriptionAndIcon
								icon={
									IconComponent ? (
										<IconComponent
											width={iconWidth}
											height={iconHeight}
											aria-hidden="true"
										/>
									) : null
								}
								title={title}
								description={description}
								isIconWider={isIconWider}
							/>
						</div>

						<div className="features__column">
							<ul className="features__list">
								{item.rightColumn.map(({ title, description }) => (
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
				);
			})}
		</section>
	);
};

export default Features;
