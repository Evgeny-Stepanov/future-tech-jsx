import getCSSRootVariableValue from "@/shared/utils/getCSSRootVariableValue";

const closeMobileMenu = (
	event: MouseEvent,
	mobileMenu: HTMLDialogElement,
	mobileMenuCloseButton: HTMLButtonElement,
	burgerButton: HTMLButtonElement,
) => {
	const target = event.target as HTMLElement;

	const transitionDuration = parseFloat(
		getCSSRootVariableValue("--transition-duration-longer"),
	);

	const clickOnCloseButton =
		target === mobileMenuCloseButton ||
		target.parentElement === mobileMenuCloseButton ||
		target.parentElement?.parentElement === mobileMenuCloseButton;

	const clickOnInactiveLink =
		(target.matches(".header__link") &&
			!target.matches(".header__link--is-current")) ||
		(target.matches(".button") && !target.matches(".button--is-current"));

	if (clickOnCloseButton || clickOnInactiveLink) {
		mobileMenu.classList.add("fade-in-right");
		mobileMenuCloseButton.classList.remove("burger-button--is-active");
		burgerButton.classList.remove("burger-button--is-active");

		const mobileMenuTimerId = setTimeout(
			() => {
				mobileMenu.close();
				mobileMenu.classList.remove("fade-in-left", "fade-in-right");
				clearTimeout(mobileMenuTimerId);
			},
			transitionDuration * 1_000 - 50,
		);
	}
};

export default closeMobileMenu;
