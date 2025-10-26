import "./Footer.scss";
import { useEffect } from "react";
import footerItems from "../model/footerItems";
import NewLabel from "./NewLabel";
import LinkWithIcon from "@/shared/ui/LinkWithIcon";
import addStylesForMobile from "../model/addStylesForMobile";

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

			<div className="footer__copyright">
				© 2024 FutureTech. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
