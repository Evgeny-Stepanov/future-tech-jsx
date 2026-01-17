type ReviewItem = {
	authorPhoto: string;
	authorName: string;
	authorLocation: string;
	starsNumber: string; // example "5.0" or "4.5"
	description: string;
};

const reviewItems: ReviewItem[] = [
	{
		authorPhoto: "src/widgets/reviews/ui/sarah-thompson.png",
		authorName: "Sarah Thompson",
		authorLocation: "San Francisco, USA",
		starsNumber: "4.0",
		description:
			"The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.",
	},

	{
		authorPhoto: "src/widgets/reviews/ui/raj-patel.png",
		authorName: "Raj Patel",
		authorLocation: "Mumbai, India",
		starsNumber: "2.0",
		description:
			"The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis, helping me make informed decisions.",
	},

	{
		authorPhoto: "src/widgets/reviews/ui/emily-adams.png",
		authorName: "Emily Adams",
		authorLocation: "London, UK",
		starsNumber: "3.5",
		description:
			"The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care.",
	},

	{
		authorPhoto: "src/widgets/reviews/ui/alan-jackson.png",
		authorName: "Alan Jackson",
		authorLocation: "Houston, USA",
		starsNumber: "5.0",
		description:
			"The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view of what lies beyond Earth.",
	},

	{
		authorPhoto: "src/widgets/reviews/ui/jessica-miller.png",
		authorName: "Jessica Miller",
		authorLocation: "Boston, USA",
		starsNumber: "4.5",
		description:
			"The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research in genomics.",
	},

	{
		authorPhoto: "src/widgets/reviews/ui/diego-lopez.png",
		authorName: "Diego Lopez",
		authorLocation: "Barcelona, Spain",
		starsNumber: "3.0",
		description:
			"The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability.",
	},
];

export type { ReviewItem };
export { reviewItems };
