import "./Header.scss";
import { NavLink } from "react-router";
import classNames from "classnames";
import "@/shared/ui/Button/ui/Button.scss";
import HeaderDesktopMenu from "./HeaderDesktopMenu";
import HeaderMobileMenu from "./HeaderMobileMenu";
import ContactsButton from "./ContactsButton";
import BurgerButton from "./BurgerButton";
import LogoWithTextSVG from "./logo-with-text.svg?react";
import openMobileMenu from "../model/openMobileMenu";

const Header = () => {
	const titleForLogoLink = "Перейти на домашнюю страницу";
	const titleForBurgerButton = "Открыть меню";

	return (
		<header className="header container">
			<NavLink
				to="/"
				className={({ isActive }) =>
					isActive
						? classNames("header__logo", "header__logo--is-current")
						: "header__logo"
				}
				aria-label={titleForLogoLink}
				title={titleForLogoLink}
			>
				<LogoWithTextSVG
					width={179}
					height={50}
					aria-hidden="true"
				/>
			</NavLink>

			<HeaderDesktopMenu isHiddenMobile />

			<ContactsButton />

			<BurgerButton
				title={titleForBurgerButton}
				className="visible-mobile"
				onBurgerButtonClick={openMobileMenu}
			/>

			<HeaderMobileMenu />
		</header>
	);
};

export default Header;
