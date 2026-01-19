import "./Reviews.scss";
import classNames from "classnames";
import SectionHeader from "@/shared/ui/SectionHeader";
import { reviewItems } from "../model/reviewItems";
import Review from "./Review";
import { tabletAndMobileMediaWidth } from "@/shared/config/mediaWidthVariables";

const Reviews = () => {
	const desktopMediaWidth = window.matchMedia("(width > 1023px)").matches;
	const columnsCount = desktopMediaWidth ? 3 : 2;

	return (
		<section className="reviews">
			<SectionHeader
				preTitle="What Our Readers Say"
				title="Real Words from Real Readers"
				linkTitle="View All Testimonials"
				href="/"
			/>

			<ul className="reviews__list">
				{reviewItems
					.slice(0, tabletAndMobileMediaWidth ? 3 : reviewItems.length)
					.map(
						(
							{
								authorPhoto,
								authorName,
								authorLocation,
								starsNumber,
								description,
							},
							index,
						) => (
							<li
								key={authorName}
								className={classNames("reviews__item", {
									"reviews__item--has-pseudo-bottom":
										!tabletAndMobileMediaWidth &&
										index % columnsCount === 0 &&
										!(index + columnsCount >= reviewItems.length),
								})}
							>
								<Review
									authorPhoto={authorPhoto}
									authorName={authorName}
									authorLocation={authorLocation}
									starsNumber={starsNumber}
									description={description}
								/>
							</li>
						),
					)}
			</ul>
		</section>
	);
};

export default Reviews;
