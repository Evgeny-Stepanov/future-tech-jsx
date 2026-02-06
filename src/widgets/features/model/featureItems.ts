type FeatureItem = {
	leftColumn: {
		iconPath: string;
		iconWidth?: number;
		iconHeight?: number;
		isIconWider?: true;
		title: string;
		description: string;
	};
	rightColumn: {
		title: string;
		description: string;
	}[];
};

const featureItems: FeatureItem[] = [
	{
		leftColumn: {
			iconPath: "./tech-blog-icon.svg",
			title: "Future Technology Blog",
			description:
				"Stay informed with our blog section dedicated to future technology.",
		},

		rightColumn: [
			{
				title: "Quantity",
				description:
					"Over 1,000 articles on emerging tech trends and breakthroughs.",
			},
			{
				title: "Variety",
				description:
					"Articles cover fields like AI, robotics, biotechnology, and more.",
			},
			{
				title: "Frequency",
				description: "Fresh content added daily to keep you up to date.",
			},
			{
				title: "Authoritative",
				description:
					"Written by our team of tech experts and industry professionals.",
			},
		],
	},

	{
		leftColumn: {
			iconPath: "./insight-blog-icon.svg",
			iconWidth: 93,
			isIconWider: true,
			title: "Research Insights Blogs",
			description:
				"Dive deep into future technology concepts with our research section.",
		},

		rightColumn: [
			{
				title: "Depth",
				description: "500+ research articles for in-depth understanding.",
			},
			{
				title: "Graphics",
				description: "Visual aids and infographics to enhance comprehension.",
			},
			{
				title: "Trends",
				description: "Explore emerging trends in future technology research.",
			},
			{
				title: "Contributors",
				description: "Contributions from tech researchers and academics.",
			},
		],
	},
];

export default featureItems;
