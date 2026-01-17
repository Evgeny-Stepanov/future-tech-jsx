import "./Stars.scss";
import { type FC } from "react";
import StarSVG from "./star.svg?react";

type StarsProps = {
	rating: string; // example 5.0 or 4.5
};

const Stars: FC<StarsProps> = ({ rating }) => {
	return (
		<div
			className="stars"
			data-rating={rating}
		>
			<div className="star">
				<div>
					<StarSVG
						width="24"
						height="24"
					/>
				</div>
			</div>

			<div className="star">
				<div>
					<StarSVG
						width="24"
						height="24"
					/>
				</div>
			</div>

			<div className="star">
				<div>
					<StarSVG
						width="24"
						height="24"
					/>
				</div>
			</div>

			<div className="star">
				<div>
					<StarSVG
						width="24"
						height="24"
					/>
				</div>
			</div>

			<div className="star">
				<div>
					<StarSVG
						width="24"
						height="24"
					/>
				</div>
			</div>
		</div>
	);
};

export default Stars;
