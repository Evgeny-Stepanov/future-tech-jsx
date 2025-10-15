import getTopAndLeftOffsetOfMobileMenuCloseButton from "./getTopAndLeftOffsetOfMobileMenuCloseButton";
import focusTrapInMobileMenu from "./focusTrapInMobileMenu";
import closeMobileMenu from "./closeMobileMenu";
import setMobileMenuPaddingTop from "./setMobileMenuPaddingTop";

const openMobileMenu = () => {
	const mobileMenu = document.querySelector(
		".header__mobile-menu"
	) as HTMLDialogElement;
	const mobileMenuCloseButton = mobileMenu.querySelector(
		"button"
	) as HTMLButtonElement;
	const burgerButton = document.querySelector(
		".burger-button"
	) as HTMLButtonElement;

	const [topOffsetOfMobileMenuCloseButton, leftOffsetOfMobileMenuCloseButton] =
		getTopAndLeftOffsetOfMobileMenuCloseButton(burgerButton);
	mobileMenuCloseButton.style.top = topOffsetOfMobileMenuCloseButton;
	mobileMenuCloseButton.style.left = leftOffsetOfMobileMenuCloseButton;

	mobileMenu.showModal();
	focusTrapInMobileMenu(mobileMenu);

	setMobileMenuPaddingTop(mobileMenu);

	burgerButton.classList.add("burger-button--is-active");
	mobileMenuCloseButton.classList.add("burger-button--is-active");
	mobileMenu.classList.add("fade-in-left");

	mobileMenu.onclick = (event) => {
		closeMobileMenu(event, mobileMenu, mobileMenuCloseButton, burgerButton);
	};
};

export default openMobileMenu;
