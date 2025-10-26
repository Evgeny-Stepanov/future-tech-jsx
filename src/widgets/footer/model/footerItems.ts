type FooterItem = {
	heading: string;
	links: Link[];
	newLabel?: string[];
};

type Link = {
	title: string;
	href: string;
	label?: true;
};

const footerItems: FooterItem[] = [
	{
		heading: "Home",
		links: [
			{
				title: "Features",
				href: "/",
			},
			{
				title: "Blogs",
				href: "/",
			},
			{
				title: "Resources",
				href: "/",
				label: true,
			},
			{
				title: "Testimonials",
				href: "/",
			},
			{
				title: "Contact Us",
				href: "/",
			},
			{
				title: "Newsletter",
				href: "/",
			},
		],
	},

	{
		heading: "News",
		links: [
			{
				title: "Trending Stories",
				href: "/",
			},

			{
				title: "Featured Videos",
				href: "/",
			},
			{
				title: "Technology",
				href: "/",
			},
			{
				title: "Health",
				href: "/",
			},
			{
				title: "Politics",
				href: "/",
			},
			{
				title: "Environment",
				href: "/",
			},
		],
	},

	{
		heading: "Blogs",
		links: [
			{
				title: "Quantum Computing",
				href: "/",
			},
			{
				title: "AI Ethics",
				href: "/",
			},
			{
				title: "Space Exploration",
				href: "/",
			},
			{
				title: "Biotechnology",
				href: "/",
				label: true,
			},
			{
				title: "Renewable Energy",
				href: "/",
			},
			{
				title: "Biohacking",
				href: "/",
			},
		],
	},

	{
		heading: "Podcasts",
		links: [
			{
				title: "AI Revolution",
				href: "/",
				label: true,
			},
			{
				title: "TechTalk AI",
				href: "/",
			},
			{
				title: "AI Conversations",
				href: "/",
			},
		],
		newLabel: ["AI Revolution"],
	},

	{
		heading: "Resources",
		links: [
			{
				title: "Whitepapers",
				href: "/",
			},
			{
				title: "Ebooks",
				href: "/",
			},
			{
				title: "Reports",
				href: "/",
			},
			{
				title: "Research Papers",
				href: "/",
			},
		],
	},
];

export default footerItems;
