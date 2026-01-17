type MainInfoItem = {
	mainTitle: string;
	mainDescription: string;
	mainButtonText: string;
	mainUsersImageSrc: string;
};

const ebooksMainInfoItem: MainInfoItem = {
	mainTitle: "Ebooks",
	mainDescription:
		"Explore our collection of ebooks covering a wide spectrum of future technology topics.",
	mainButtonText: "Download Ebooks Now",
	mainUsersImageSrc: "src/entities/LeadMagnet/ui/ebooks-users.png",
};

const whitepapersMainInfoItem: MainInfoItem = {
	mainTitle: "Whitepapers",
	mainDescription:
		"Dive into comprehensive reports and analyses with our collection of whitepapers.",
	mainButtonText: "Download Whitepapers Now",
	mainUsersImageSrc: "src/entities/LeadMagnet/ui/whitepapers-users.png",
};

export { ebooksMainInfoItem, whitepapersMainInfoItem };
