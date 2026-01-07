import "./Blog.scss";
import { useState } from "react";
import SectionHeader from "@/shared/ui/SectionHeader";
import tabItems from "../model/tabItems";
import { postItems, type PostItem } from "../model/postItems";
import classNames from "classnames";
import Post from "@/entities/Post";
import formatStringToLowercaseWithDashes from "@/shared/utils/formatStringToLowercaseWithDashes";

const Blog = () => {
	const [allPosts] = useState(postItems);
	const [activePosts, setActivePosts] = useState(postItems);
	const [likedPosts, setLikedPosts] = useState([postItems[0]]);
	const [activeTab, setActiveTab] = useState(tabItems[0]);
	const [activeTabAttr, setActiveTabAttr] = useState([
		`tab-${formatStringToLowercaseWithDashes(activeTab)}`,
		`panel-${formatStringToLowercaseWithDashes(activeTab)}`,
	]);

	const handleTabsParentClick = (
		event: React.MouseEvent<HTMLUListElement, MouseEvent>
	) => {
		const target = event.target as HTMLElement;

		if (target.matches("button")) {
			const buttonText = target.textContent;

			if (buttonText === "All") {
				setActivePosts(allPosts);
			} else {
				setActivePosts(
					allPosts.filter((post) => post.authorCategory === buttonText)
				);
			}

			setActiveTab(buttonText);
			setActiveTabAttr([
				`tab-${formatStringToLowercaseWithDashes(buttonText)}`,
				`panel-${formatStringToLowercaseWithDashes(buttonText)}`,
			]);
		}
	};

	const handleLikeClick = (postTitle: string) => {
		const post = postItems.find(
			(item) => item.postTitle === postTitle
		) as PostItem;

		if (likedPosts.includes(post)) {
			setLikedPosts(likedPosts.filter((likedPost) => likedPost !== post));
		} else {
			setLikedPosts([...likedPosts, post]);
		}
	};

	return (
		<section className="blog">
			<SectionHeader
				preTitle="A Knowledge Treasure Trove"
				title="Explore FutureTech's In-Depth Blog Posts"
				linkTitle="View All Blogs"
				href="/"
			/>

			<ul
				className="blog__tabs-list"
				onClick={handleTabsParentClick}
				role="tablist"
			>
				{tabItems.map((item) => (
					<li
						key={item}
						className={classNames("blog__tabs-item", {
							"blog__tabs-item--is-active": activeTab === item,
						})}
					>
						<button
							type="button"
							role="tab"
							aria-selected={activeTab === item ? "true" : "false"}
							id={`tab-${formatStringToLowercaseWithDashes(item)}`}
							aria-controls={`panel-${formatStringToLowercaseWithDashes(item)}`}
						>
							{item}
						</button>
					</li>
				))}
			</ul>

			{activePosts.length ? (
				<ul
					className="blog__posts-list"
					role="tabpanel"
					aria-labelledby={activeTabAttr[0]}
					id={activeTabAttr[1]}
				>
					{activePosts.map((post) => (
						<li key={post.postTitle}>
							<Post
								authorPhoto={post.authorPhoto}
								authorName={post.authorName}
								authorCategory={post.authorCategory}
								postDate={post.postDate}
								postTitle={post.postTitle}
								postDescription={post.postDescription}
								likesCount={post.likesCount}
								commentsCount={post.commentsCount}
								tgCount={post.tgCount}
								handleLikeClick={handleLikeClick}
								likedPosts={likedPosts}
							/>
						</li>
					))}
				</ul>
			) : (
				<h3 className="blog__placeholder-text h4">
					There are no posts on this topic
				</h3>
			)}
		</section>
	);
};

export default Blog;
