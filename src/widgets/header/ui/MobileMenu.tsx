import DesktopMenu from "./DesktopMenu";
import ContactsButton from "./ContactsButton";
import BurgerButton from "./BurgerButton";

const MobileMenu = () => {
	return (
		<dialog className="header__mobile-menu">
			<div>
				<DesktopMenu />
				<ContactsButton isVisibleInMobileMenu />
				<BurgerButton title="Close menu" />
			</div>
		</dialog>
	);
};

export default MobileMenu;
