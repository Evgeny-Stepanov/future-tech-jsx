import "./ContactCard.scss";
import { type FC } from "react";
import type { ContactItem } from "../model/contactItems";
import LinkWithIcon from "@/shared/ui/LinkWithIcon";

type ContactCardProps = ContactItem;

const contactsIcons = import.meta.glob("/src/widgets/footer/ui/*.svg", {
	query: "?react",
	import: "default",
	eager: true,
}) as Record<string, React.FC<React.SVGProps<SVGSVGElement>>>;

const ContactCard: FC<ContactCardProps> = ({ title, text, links, socials }) => {
	return (
		<div className="contact-card">
			<h2 className="h6">{title}</h2>

			{text && <p>{text}</p>}

			{links &&
				links.map(({ title, href }) => (
					<LinkWithIcon
						key={title}
						title={title}
						href={href}
						hasBorder
						hasGrayBackground
					/>
				))}

			{socials && (
				<ul className="contact-card__socials">
					{socials.map(({ iconPath, title, href }) => {
						const IconComponent = contactsIcons[iconPath];

						return (
							<li key={title}>
								<a
									className="contact-card__socials-link"
									href={href}
									title={title}
									aria-label={title}
								>
									<div>
										{IconComponent ? (
											<IconComponent
												width={24}
												height={24}
												aria-hidden="true"
											/>
										) : null}
									</div>
								</a>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};

export default ContactCard;
