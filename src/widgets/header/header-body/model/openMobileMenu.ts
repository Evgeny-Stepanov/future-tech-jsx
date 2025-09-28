import getTopOffsetForMobileMenuWrapper from "./getTopOffsetForMobileMenuWrapper";
import closeMobileMenu from "./closeMobileMenu";

const openMobileMenu = (toggleVisibilityMobileMenu: () => void) => {
	const mobileMenuWrapper = document.querySelector(
		".header__mobile-menu-wrapper"
	) as HTMLDialogElement;
	const burgerButton = document.querySelector(
		".header__burger-button"
	) as HTMLButtonElement;

	const offsetTop = getTopOffsetForMobileMenuWrapper(mobileMenuWrapper);

	mobileMenuWrapper.style.top = offsetTop;

	burgerButton.classList.add("header__burger-button--is-active");
	mobileMenuWrapper.classList.add(
		"header__mobile-menu-wrapper--is-active",
		"fade-in-left"
	);

	mobileMenuWrapper.showModal();

	closeMobileMenu(mobileMenuWrapper, burgerButton, toggleVisibilityMobileMenu);
};

export default openMobileMenu;
