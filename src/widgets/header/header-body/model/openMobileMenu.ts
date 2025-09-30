import getTopOffsetOfMobileMenu from "./getTopOffsetOfMobileMenu";
import focusTrapInMobileMenu from "./focusTrapInMobileMenu";

const openMobileMenu = () => {
	const mobileMenu = document.querySelector(
		".header__mobile-menu"
	) as HTMLDialogElement;
	const burgerButton = document.querySelector(
		".burger-button"
	) as HTMLButtonElement;

	const topOffset = getTopOffsetOfMobileMenu(mobileMenu);
	mobileMenu.querySelector("div")!.style.marginTop = topOffset;

	burgerButton.classList.add("burger-button--is-active");
	mobileMenu.classList.add("header__mobile-menu--is-open", "fade-in-left");

	mobileMenu.showModal();
	focusTrapInMobileMenu(mobileMenu);
};

export default openMobileMenu;
