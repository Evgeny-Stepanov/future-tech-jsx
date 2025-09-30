import HeaderDesktopMenu from "./HeaderDesktopMenu";
import ContactsButton from "./ContactsButton";
import BurgerButton from "./BurgerButton";

const HeaderMobileMenu = () => {
	const titleForBurgerButton = "Закрыть меню";

	const handleBurgerButtonClick = () => {
		console.log("it's okay");
	};

	return (
		<dialog className="header__mobile-menu">
			<div>
				<HeaderDesktopMenu />
				<ContactsButton isVisibleInMobileMenu />
				<BurgerButton
					title={titleForBurgerButton}
					onBurgerButtonClick={handleBurgerButtonClick}
				/>
			</div>
		</dialog>
	);
};

export default HeaderMobileMenu;
