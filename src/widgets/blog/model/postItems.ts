import johnTechsonPhoto from "../ui/john-techson.png";
import sarahEthicistPhoto from "../ui/sarah-ethicist.png";
import astronomerXPhoto from "../ui/astronomer-x.png";

type PostItem = {
	authorPhoto: string;
	authorName: string;
	authorCategory: string;
	postDate: string; // YYYY-MM-DD
	postTitle: string;
	postDescription: string;
	likesCount: string;
	commentsCount: string;
	tgCount: string;
};

const postItems: PostItem[] = [
	{
		authorPhoto: johnTechsonPhoto,
		authorName: "John Techson",
		authorCategory: "Quantum Computing",
		postDate: "2023-10-15",
		postTitle: "The Quantum Leap in Computing",
		postDescription:
			"Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
		likesCount: "24.5k",
		commentsCount: "50",
		tgCount: "20",
	},

	{
		authorPhoto: sarahEthicistPhoto,
		authorName: "Sarah Ethicist",
		authorCategory: "AI Ethics",
		postDate: "2023-11-05",
		postTitle: "The Ethical Dilemmas of AI",
		postDescription:
			"A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.",
		likesCount: "32k",
		commentsCount: "72",
		tgCount: "18",
	},

	{
		authorPhoto: astronomerXPhoto,
		authorName: "Astronomer X",
		authorCategory: "Space Exploration",
		postDate: "2023-12-10",
		postTitle: "The Mars Colonization Challenge",
		postDescription:
			"Exploring the technical and logistical challenges of human colonization on Mars.",
		likesCount: "20k",
		commentsCount: "31",
		tgCount: "12",
	},
];

export type { PostItem };
export { postItems };
