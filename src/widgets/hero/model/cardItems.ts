type CardItem = {
	iconPath: string;
	title: string;
	subtitle: string;
	description: string;
};

const cardItems: CardItem[] = [
	{
		iconPath: "./card-icon-1.svg",
		title: "Latest News Updates",
		subtitle: "Stay Current",
		description: "Over 1,000 articles published monthly",
	},

	{
		iconPath: "./card-icon-2.svg",
		title: "Expert Contributors",
		subtitle: "Trusted Insights",
		description: "50+ renowned AI experts on our team",
	},

	{
		iconPath: "./card-icon-3.svg",
		title: "Global Readership",
		subtitle: "Worldwide Impact",
		description: "2 million monthly readers",
	},
];

export default cardItems;
