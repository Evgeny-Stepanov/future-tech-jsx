import "./HeaderBody.scss";
import { NavLink } from "react-router";
import classNames from "classnames";
import "@/shared/ui/Button/ui/Button.scss";
import HeaderDesktopMenu from "./HeaderDesktopMenu";
import HeaderMobileMenu from "./HeaderMobileMenu";
import ContactsButton from "./ContactsButton";
import LogoWithText from "./logo-with-text.svg?react";
import openMobileMenu from "../model/openMobileMenu";
import { useState } from "react";
//import closeMobileMenu from "../model/closeMobileMenu";

const HeaderBody = () => {
	const titleForLogoLink = "Перейти на домашнюю страницу";
	const titleForBurgerButton = "Открыть меню";

	const [visibilityMobileMenu, setVisibilityMobileMenu] = useState(false);

	const toggleVisibilityMobileMenu = () => {
		setVisibilityMobileMenu(!visibilityMobileMenu);
	};

	if (visibilityMobileMenu) {
		openMobileMenu(toggleVisibilityMobileMenu);
	}

	return (
		<div className="header__body">
			<NavLink
				to="/"
				className={({ isActive }) =>
					isActive
						? classNames("header__logo", "header__logo--is-active")
						: "header__logo"
				}
				aria-label={titleForLogoLink}
				title={titleForLogoLink}
			>
				<LogoWithText
					width={179}
					height={50}
					aria-hidden="true"
				/>
			</NavLink>

			<HeaderDesktopMenu classNamesForNavBar="header__desktop-menu hidden-mobile" />

			<ContactsButton />

			<button
				className="header__burger-button visible-mobile"
				type="button"
				aria-label={titleForBurgerButton}
				onClick={toggleVisibilityMobileMenu}
			>
				<div>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</button>

			<HeaderMobileMenu />
		</div>
	);
};

export default HeaderBody;
