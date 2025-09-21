import "./HeaderMenu.scss";
import HeaderDesktopMenu from "./HeaderDesktopMenu";
import { ContactsButton } from "./HeaderBody";

const HeaderMenuMobile = () => {
	return (
		<dialog className="header__mobile-menu-wrapper visible-mobile">
			<HeaderDesktopMenu classNamesForNav="header__mobile-menu" />
			<ContactsButton isVisibleInMobileMenu />
		</dialog>
	);
};

export default HeaderMenuMobile;
