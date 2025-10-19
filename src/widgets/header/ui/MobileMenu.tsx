import DesktopMenu from "./DesktopMenu";
import ContactsButton from "./ContactsButton";
import BurgerButton from "./BurgerButton";

const MobileMenu = () => {
	const titleForBurgerButton = "Закрыть меню";

	return (
		<dialog className="header__mobile-menu">
			<div>
				<DesktopMenu />
				<ContactsButton isVisibleInMobileMenu />
				<BurgerButton title={titleForBurgerButton} />
			</div>
		</dialog>
	);
};

export default MobileMenu;
