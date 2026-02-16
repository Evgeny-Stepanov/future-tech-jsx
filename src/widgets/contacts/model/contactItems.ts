type ContactItem = {
	title: string;
	text?: string;
	links?: { title: string; href: string }[];
	socials?: {
		//* If the path is to another folder change it in import.meta.glob in ContactCard.tsx
		iconPath: string;
		href: string;
		title: string;
	}[];
};

const contactItems: ContactItem[] = [
	{
		title: "General Inquiries",
		links: [
			{
				title: "contact@ai-podcasts.com",
				href: "mailto:contact@ai-podcasts.com",
			},
			{
				title: "+1 (123) 456-7890",
				href: "tel:+11234567890",
			},
		],
	},
	{
		title: "Technical Support",
		links: [
			{
				title: "contact@ai-podcasts.com",
				href: "mailto:contact@ai-podcasts.com",
			},
			{
				title: "+1 (123) 456-7890",
				href: "tel:+11234567890",
			},
		],
	},
	{
		title: "Our Office",
		text: "Address: 123 AI Tech Avenue, Techville, 54321",
		links: [{ title: "Get Directions", href: "/" }],
	},
	{
		title: "Connect with Us",
		socials: [
			{
				iconPath: "/src/widgets/footer/ui/twitter-logo.svg",
				href: "/",
				title: "Twitter",
			},
			{
				iconPath: "/src/widgets/footer/ui/some-logo.svg",
				href: "/",
				title: "Some network",
			},
			{
				iconPath: "/src/widgets/footer/ui/linked-in-logo.svg",
				href: "/",
				title: "Linked In",
			},
		],
	},
];

export type { ContactItem };
export { contactItems };
