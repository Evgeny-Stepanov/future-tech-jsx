import "./Footer.scss";
import { useEffect } from "react";
import footerItems from "../model/footerItems";
import NewLabel from "./NewLabel";
import LinkWithIcon from "@/shared/ui/LinkWithIcon";
import addStylesForMobile from "../model/addStylesForMobile";
import TwitterLogoSVG from "./twitter-logo.svg?react";
import SomeLogoSVG from "./some-logo.svg?react";
import LinkedInLogoSVG from "./linked-in-logo.svg?react";

const Footer = () => {
	useEffect(() => addStylesForMobile(), []);

	return (
		<footer className="footer container">
			<div className="footer__grid">
				{footerItems.map(({ heading, links }) => (
					<div
						className="footer__column"
						key={heading}
					>
						<h4 className="h6">{heading}</h4>
						<ul
							className="footer__list"
							key={heading}
						>
							{links.map(({ title, href, label }) => (
								<li key={title}>
									{heading === "Resources" ? (
										<LinkWithIcon
											title={title}
											href={href}
											hasBorder
										/>
									) : (
										<>
											<a
												href={href}
												className="footer__link"
											>
												{title}
											</a>
											{label && <NewLabel />}
										</>
									)}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>

			<hr />

			<div className="footer__copyright copyright">
				<div className="copyright__links">
					<ul className="copyright__links-list">
						<li>
							<a
								href="/"
								className="copyright__links-link"
							>
								Terms & Conditions
							</a>
						</li>
						<li>
							<span></span>
						</li>
						<li>
							<a
								href="/"
								className="copyright__links-link"
							>
								Privacy Policy
							</a>
						</li>
					</ul>
				</div>

				<div className="copyright__socials">
					<ul className="copyright__socials-list">
						<li>
							<a
								href="/"
								aria-label="Twitter"
								title="Twitter"
								className="copyright__socials-link"
							>
								<TwitterLogoSVG
									width={24}
									height={24}
									aria-hidden="true"
								/>
							</a>
						</li>
						<li>
							<a
								href="/"
								aria-label="Some network"
								title="Some network"
								className="copyright__socials-link"
							>
								<SomeLogoSVG
									width={24}
									height={24}
									aria-hidden="true"
								/>
							</a>
						</li>
						<li>
							<a
								href="/"
								aria-label="Linked In"
								title="Linked In"
								className="copyright__socials-link"
							>
								<LinkedInLogoSVG
									width={24}
									height={24}
									aria-hidden="true"
								/>
							</a>
						</li>
					</ul>
				</div>

				<div className="copyright__text">
					<p>© 2024 FutureTech. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
