import "./Review.scss";
import { type FC } from "react";
import { type ReviewItem } from "../model/reviewItems";
import Stars from "./Stars";

const Review: FC<ReviewItem> = ({
	authorPhoto,
	authorName,
	authorLocation,
	starsNumber,
	description,
}) => {
	return (
		<div className="review">
			<div className="review__author">
				<div className="review__author-photo">
					<img
						src={authorPhoto}
						alt=""
					/>
				</div>
				<div className="review__author-name">{authorName}</div>
				<div className="review__author-location">{authorLocation}</div>
			</div>

			<div className="review__description">
				<Stars rating={starsNumber} />
				<p>{description}</p>
			</div>
		</div>
	);
};

export default Review;
