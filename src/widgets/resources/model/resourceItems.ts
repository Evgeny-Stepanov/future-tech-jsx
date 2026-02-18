type ResourceItem = {
	leftColumn: {
		iconPath: string;
		title: string;
		description: string;
		buttonText: string;
		usersImageSrc: string;
	};
	rightColumn: {
		title: string;
		description: string;
		totalDescription: string;
		totalNumber: string;
		authorExpertise: string;
		imageSrc: string;
		imageAlt: string;
	};
};

const resourceItems: ResourceItem[] = [
	{
		leftColumn: {
			iconPath: "./ebooks.svg",
			title: "Ebooks",
			description:
				"Explore our collection of ebooks covering a wide spectrum of future technology topics.",
			buttonText: "Download Ebooks Now",
			usersImageSrc: new URL("../ui/ebooks-users.png", import.meta.url).href,
		},

		rightColumn: {
			title: "Variety of Topics",
			description:
				"Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).",
			totalDescription: "Total Ebooks",
			totalNumber: "Over 100 ebooks",
			authorExpertise:
				"Ebooks are authored by renowned experts with an average of 15 years of experience.",
			imageSrc: new URL("../ui/ebooks-image.jpg", import.meta.url).href,
			imageAlt:
				"A group of students in the library uses VR glasses and laptops for studying.",
		},
	},

	{
		leftColumn: {
			iconPath: "./whitepapers.svg",
			title: "Whitepapers",
			description:
				"Dive into comprehensive reports and analyses with our collection of whitepapers.",
			buttonText: "Download Whitepapers Now",
			usersImageSrc: new URL("../ui/whitepapers-users.png", import.meta.url)
				.href,
		},

		rightColumn: {
			title: "Topics Coverage",
			description:
				"Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%), AI in healthcare (15%), and renewable energy strategies (30%).",
			totalDescription: "Total Whitepapers",
			totalNumber: "Over 50 whitepapers",
			authorExpertise:
				"Whitepapers are authored by subject matter experts with an average of 20 years of experience.",
			imageSrc: new URL("../ui/whitepapers-image.jpg", import.meta.url).href,
			imageAlt:
				"A hand in a business suit touches a futuristic glowing digital panel.",
		},
	},
];

export default resourceItems;
