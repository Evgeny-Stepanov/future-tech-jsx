import "./HeaderMenu.scss";
import HeaderDesktopMenu from "./HeaderDesktopMenu";
import { ContactsButton } from "./HeaderBody";

const HeaderMobileMenu = () => {
	return (
		<dialog className="header__mobile-menu-wrapper">
			<div>
				<HeaderDesktopMenu classNamesForNav="header__mobile-menu" />
				<ContactsButton isVisibleInMobileMenu />
			</div>
		</dialog>
	);
};

export default HeaderMobileMenu;
