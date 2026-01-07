import "./SocialActivity.scss";
import { type FC } from "react";
import LikeSVG from "./like.svg?react";
import CommentSVG from "./comment.svg?react";
import TgSVG from "./tg.svg?react";
import classNames from "classnames";
import type { PostItem } from "@/widgets/blog/model/postItems";

type SocialActivityProps = {
	activityName: "likes" | "comments" | "tg";
	count: string;
	postTitle?: string;
	handleLikeClick?: (postTitle: string) => void;
	likedPosts?: PostItem[];
};

const SocialActivity: FC<SocialActivityProps> = ({
	activityName,
	count,
	postTitle,
	handleLikeClick,
	likedPosts,
}) => {
	const ariaLabelForActivity =
		activityName === "comments"
			? `${count} comments`
			: `${count} reposts on Telegram`;

	const isLiked = likedPosts?.some((post) => post.postTitle === postTitle);

	return (
		<>
			{activityName === "likes" && (
				<button
					className="social-activity"
					type="button"
					aria-pressed={isLiked ? "true" : "false"}
					aria-label={isLiked ? "Remove like" : "Like"}
					onClick={() => handleLikeClick?.(postTitle as string)}
				>
					<span
						className={classNames("social-activity__icon", {
							"social-activity__icon--is-liked": isLiked,
						})}
					>
						<LikeSVG
							width={24}
							height={24}
							aria-hidden="true"
						/>
					</span>
					<span className="social-activity__count">{count}</span>
				</button>
			)}

			{activityName === "comments" && (
				<div className="social-activity">
					<span className="social-activity__icon">
						<CommentSVG
							width={24}
							height={24}
							aria-label={ariaLabelForActivity}
						/>
					</span>
					<span
						className="social-activity__count"
						aria-hidden="true"
					>
						{count}
					</span>
				</div>
			)}

			{activityName === "tg" && (
				<div className="social-activity">
					<span className="social-activity__icon">
						<TgSVG
							width={24}
							height={24}
							/* I don't know what the designer means by the Telegram icon. */
							aria-label={ariaLabelForActivity}
						/>
					</span>
					<span
						className="social-activity__count"
						aria-hidden="true"
					>
						{count}
					</span>
				</div>
			)}
		</>
	);
};

export default SocialActivity;
