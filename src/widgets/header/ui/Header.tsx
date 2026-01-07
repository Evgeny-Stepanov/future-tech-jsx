import "./Header.scss";
import { NavLink } from "react-router";
import classNames from "classnames";
import "@/shared/ui/Button/ui/Button.scss";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import ContactsButton from "./ContactsButton";
import BurgerButton from "./BurgerButton";
import LogoWithTextSVG from "./logo-with-text.svg?react";
import openMobileMenu from "../model/openMobileMenu";

const Header = () => {
	return (
		<header className="header container">
			<NavLink
				to="/"
				className={({ isActive }) =>
					isActive
						? classNames("header__logo", "header__logo--is-current")
						: "header__logo"
				}
				aria-label="Go to home page"
				title="Go to home page"
			>
				<LogoWithTextSVG
					width={179}
					height={50}
					aria-hidden="true"
				/>
			</NavLink>

			<DesktopMenu isHiddenMobile />

			<ContactsButton />

			<BurgerButton
				title="Open menu"
				className="visible-mobile"
				onBurgerButtonClick={openMobileMenu}
			/>

			<MobileMenu />
		</header>
	);
};

export default Header;
