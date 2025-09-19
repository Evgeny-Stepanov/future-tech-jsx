import "./HeaderBody.scss";
import "@/shared/ui/Button/ui/Button.scss";
import { NavLink } from "react-router";
import { type FC } from "react";
import HeaderDesktopMenu from "./HeaderDesktopMenu";
import HeaderMenuMobile from "./HeaderMobileMenu";
import LogoWithText from "./logo-with-text.svg?react";
import BurgerButton from "./burger-button.svg?react";
import classNames from "classnames";

type ContactsButtonProps = {
	isVisibleInMobileMenu?: true;
};

const ContactsButton: FC<ContactsButtonProps> = ({ isVisibleInMobileMenu }) => (
	<NavLink
		to="/contacts"
		className={({ isActive }) =>
			isActive
				? classNames("button", "button--is-active", {
						"hidden-mobile": !isVisibleInMobileMenu,
					})
				: classNames("button", {
						"hidden-mobile": !isVisibleInMobileMenu,
					})
		}
	>
		Contact Us
	</NavLink>
);

const HeaderBody = () => {
	const titleForLogoLink = "Перейти на домашнюю страницу";
	const titleForBurgerButton = "Открыть меню";

	const handleClick = () => {
		const mobileMenuWrapper = document.querySelector(
			".header__mobile-menu-wrapper"
		) as HTMLDialogElement;

		mobileMenuWrapper.showModal();
	};

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

			<HeaderDesktopMenu classNamesForNav="header__desktop-menu hidden-mobile" />

			<HeaderMenuMobile />

			<ContactsButton />

			<button
				className="header__burger-button visible-mobile"
				onClick={handleClick}
			>
				<BurgerButton
					width={34}
					height={34}
					aria-label={titleForBurgerButton}
				/>
			</button>
		</div>
	);
};

export { ContactsButton };
export default HeaderBody;
