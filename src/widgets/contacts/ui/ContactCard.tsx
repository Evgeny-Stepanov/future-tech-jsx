import "./ContactCard.scss";
import { type FC } from "react";
import LinkWithIcon from "@/shared/ui/LinkWithIcon";
import TwitterLogoSVG from "@/widgets/footer/ui/twitter-logo.svg?react";
import SomeLogoSVG from "@/widgets/footer/ui/some-logo.svg?react";
import LinkedInLogoSVG from "@/widgets/footer/ui/linked-in-logo.svg?react";

type ContactCardProps = {
	title: string;
	mode: "link+link" | "text+link" | "socials";
	firstLinkTitle?: string;
	secondLinkTitle?: string;
	text?: string;
};

const ContactCard: FC<ContactCardProps> = ({
	title,
	mode,
	firstLinkTitle,
	secondLinkTitle,
	text,
}) => {
	return (
		<div className="contact-card">
			<h2 className="h6">{title}</h2>

			{mode === "link+link" && (
				<>
					<LinkWithIcon
						title={firstLinkTitle as string}
						href="/"
						hasBorder
						hasGrayBackground
					/>
					<LinkWithIcon
						title={secondLinkTitle as string}
						href="/"
						hasBorder
						hasGrayBackground
					/>
				</>
			)}

			{mode === "text+link" && (
				<>
					<p>{text}</p>
					<LinkWithIcon
						title={firstLinkTitle as string}
						href="/"
						hasBorder
						hasGrayBackground
					/>
				</>
			)}

			{mode === "socials" && (
				<ul className="contact-card__socials">
					<li>
						<a
							href="/"
							aria-label="Twitter"
							title="Twitter"
							className="contact-card__socials-link"
						>
							<div>
								<TwitterLogoSVG
									width={24}
									height={24}
									aria-hidden="true"
								/>
							</div>
						</a>
					</li>

					<li>
						<a
							href="/"
							aria-label="Some network"
							title="Some network"
							className="contact-card__socials-link"
						>
							<div>
								<SomeLogoSVG
									width={24}
									height={24}
									aria-hidden="true"
								/>
							</div>
						</a>
					</li>

					<li>
						<a
							href="/"
							aria-label="Linked In"
							title="Linked In"
							className="contact-card__socials-link"
						>
							<div>
								<LinkedInLogoSVG
									width={24}
									height={24}
									aria-hidden="true"
								/>
							</div>
						</a>
					</li>
				</ul>
			)}
		</div>
	);
};

export default ContactCard;
