import "./Post.scss";
import { type FC } from "react";
import LinkWithIcon from "@/shared/ui/LinkWithIcon";
import SocialActivity from "./SocialActivity";
import type { PostItem } from "@/widgets/blog/model/postItems";

type PostProps = PostItem & {
	handleLikeClick: (postTitle: string) => void;
	likedPosts: PostItem[];
};

const Post: FC<PostProps> = ({
	authorPhoto,
	authorName,
	authorCategory,
	postDate,
	postTitle,
	postDescription,
	likesCount,
	commentsCount,
	tgCount,
	handleLikeClick,
	likedPosts,
}) => {
	const setFullDate = (dateAsNumber: string) => {
		const date = new Date(dateAsNumber);
		const options: Intl.DateTimeFormatOptions = {
			year: "numeric",
			month: "long",
			day: "numeric",
		};

		return date.toLocaleDateString("en-US", options);
	};

	return (
		<div className="post">
			<div className="post__author">
				<div className="post__author-photo">
					<img
						src={authorPhoto}
						alt=""
					/>
				</div>
				<div className="post__author-description">
					<span className="post__author-name">{authorName}</span>
					<span>{authorCategory}</span>
				</div>
			</div>

			<div className="post__info">
				<time
					className="post__date h6"
					dateTime={postDate}
				>
					{setFullDate(postDate)}
				</time>
				<h3 className="post__title h4">{postTitle}</h3>
				<p className="post__description">{postDescription}</p>

				<div className="post__activity">
					<SocialActivity
						activityName="likes"
						count={likesCount}
						postTitle={postTitle}
						handleLikeClick={handleLikeClick}
						likedPosts={likedPosts}
					/>
					<SocialActivity
						activityName="comments"
						count={commentsCount}
					/>
					<SocialActivity
						activityName="tg"
						count={tgCount}
					/>
				</div>
			</div>

			<LinkWithIcon
				title="View Blog"
				href="/"
				hasBorder
			/>
		</div>
	);
};

export default Post;
