import getTopOffsetForMobileMenu from "./getTopOffsetForMobileMenu";

const toggleMobileMenu = ({ currentTarget }: React.MouseEvent) => {
	const burgerButton = currentTarget;
	const mobileMenuWrapper = document.querySelector(
		".header__mobile-menu-wrapper"
	) as HTMLDialogElement;

	const offsetTop = getTopOffsetForMobileMenu(mobileMenuWrapper);

	burgerButton.classList.add("header__burger-button--is-active");
	mobileMenuWrapper.classList.add("header__mobile-menu-wrapper--is-open");

	mobileMenuWrapper.style.top = offsetTop;

	mobileMenuWrapper.showModal();
};

export default toggleMobileMenu;
