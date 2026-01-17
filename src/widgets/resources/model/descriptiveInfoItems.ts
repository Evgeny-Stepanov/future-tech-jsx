type DescriptiveInfoItem = {
	descriptiveTitle: string;
	descriptiveDescription: string;
	descriptiveTotalDescription: string;
	descriptiveTotalNumber: string;
	descriptiveAuthorExpertise: string;
	descriptiveImageSrc: string;
	descriptiveImageAlt: string;
};

const ebooksDescriptiveInfoItem: DescriptiveInfoItem = {
	descriptiveTitle: "Variety of Topics",
	descriptiveDescription:
		"Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).",
	descriptiveTotalDescription: "Total Ebooks",
	descriptiveTotalNumber: "Over 100 ebooks",
	descriptiveAuthorExpertise:
		"Ebooks are authored by renowned experts with an average of 15 years of experience.",
	descriptiveImageSrc: "src/entities/LeadMagnet/ui/ebooks-image.jpg",
	descriptiveImageAlt:
		"A group of students in the library uses VR glasses and laptops for studying.",
};

const whitepapersDescriptiveInfoItem: DescriptiveInfoItem = {
	descriptiveTitle: "Topics Coverage",
	descriptiveDescription:
		"Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%), AI in healthcare (15%), and renewable energy strategies (30%).",
	descriptiveTotalDescription: "Total Whitepapers",
	descriptiveTotalNumber: "Over 50 whitepapers",
	descriptiveAuthorExpertise:
		"Whitepapers are authored by subject matter experts with an average of 20 years of experience.",
	descriptiveImageSrc: "src/entities/LeadMagnet/ui/whitepapers-image.jpg",
	descriptiveImageAlt:
		"A hand in a business suit touches a futuristic glowing digital panel.",
};

export { ebooksDescriptiveInfoItem, whitepapersDescriptiveInfoItem };
