import getTopOffsetForMobileMenu from "./getTopOffsetForMobileMenu";
import closeMobileMenu from "./closeMobileMenu";

const openMobileMenu = ({ currentTarget }: React.MouseEvent) => {
	const burgerButton = currentTarget as HTMLButtonElement;
	const mobileMenuWrapper = document.querySelector(
		".header__mobile-menu-wrapper"
	) as HTMLDialogElement;

	const offsetTop = getTopOffsetForMobileMenu(mobileMenuWrapper);

	mobileMenuWrapper.style.top = offsetTop;

	burgerButton.classList.add("header__burger-button--is-active");
	mobileMenuWrapper.classList.add("header__mobile-menu-wrapper--is-open");

	mobileMenuWrapper.showModal();

	closeMobileMenu(mobileMenuWrapper, burgerButton);
};

export default openMobileMenu;
