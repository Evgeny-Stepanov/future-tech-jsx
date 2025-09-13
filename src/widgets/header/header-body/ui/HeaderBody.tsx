import "./HeaderBody.scss";
import "@/shared/ui/Button/ui/Button.scss";
import { type FC } from "react";
import { NavLink } from "react-router";
import HeaderMenu from "./HeaderMenu";
import LogoWithText from "./logo-with-text.svg?react";

type HeaderProps = {
	titleForLogoLink: string;
};

const HeaderBody: FC<HeaderProps> = ({ titleForLogoLink }) => {
	return (
		<div className="header__body">
			<NavLink
				to="/"
				className="header__logo"
				aria-label={titleForLogoLink}
				title={titleForLogoLink}
			>
				<LogoWithText
					width={179}
					height={50}
					aria-hidden="true"
				/>
			</NavLink>

			<HeaderMenu />

			<NavLink
				to="/contacts"
				className="button"
			>
				Contact Us
			</NavLink>
		</div>
	);
};

export default HeaderBody;
