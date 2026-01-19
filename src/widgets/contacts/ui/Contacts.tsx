import "./Contacts.scss";
import classNames from "classnames";
import ContactCard from "./ContactCard";
import { tabletAndMobileMediaWidth } from "@/shared/config/mediaWidthVariables";

const Contacts = () => {
	const tabletMediaWidth = window.matchMedia(
		"(width < 1280px) and (width > 767px)",
	).matches;

	return (
		<ul className="contacts__list contacts__list--has-pseudo-bottom">
			<li
				className={classNames("contacts__item", {
					"contacts__item--has-pseudo-bottom": tabletMediaWidth,
					"contacts__item--has-mobile-pseudo-bottom": tabletAndMobileMediaWidth,
				})}
			>
				<ContactCard
					title="General Inquiries"
					mode="link+link"
					firstLinkTitle="contact@ai-podcasts.com"
					secondLinkTitle="+1 (123) 456-7890"
				/>
			</li>

			<li
				className={classNames("contacts__item", {
					"contacts__item--has-mobile-pseudo-bottom": tabletAndMobileMediaWidth,
				})}
			>
				<ContactCard
					title="Technical Support"
					mode="link+link"
					firstLinkTitle="contact@ai-podcasts.com"
					secondLinkTitle="+1 (123) 456-7890"
				/>
			</li>

			<li
				className={classNames("contacts__item", {
					"contacts__item--has-mobile-pseudo-bottom": tabletAndMobileMediaWidth,
				})}
			>
				<ContactCard
					title="Our Office"
					mode="text+link"
					firstLinkTitle="Get Directions"
					text="Address: 123 AI Tech Avenue, Techville, 54321"
				/>
			</li>

			<li className="contacts__item">
				<ContactCard
					title="Connect with Us"
					mode="socials"
				/>
			</li>
		</ul>
	);
};

export default Contacts;
