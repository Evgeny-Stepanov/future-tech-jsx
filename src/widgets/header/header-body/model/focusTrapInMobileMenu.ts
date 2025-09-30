const focusTrapInMobileMenu = (mobileMenu: HTMLDialogElement) => {
	const focusableElements = mobileMenu.querySelectorAll("a, button");
	const firstFocusableElement = focusableElements[0] as
		| HTMLLinkElement
		| HTMLButtonElement;
	const lastFocusableElement = focusableElements[
		focusableElements.length - 1
	] as HTMLLinkElement | HTMLButtonElement;

	mobileMenu.addEventListener("keydown", (event) => {
		const isTabPressed = event.key === "Tab" || event.code === "Tab";

		if (!isTabPressed) {
			return;
		}

		if (event.shiftKey) {
			if (document.activeElement === firstFocusableElement) {
				lastFocusableElement.focus();
				event.preventDefault();
			}
		} else {
			if (document.activeElement === lastFocusableElement) {
				firstFocusableElement.focus();
				event.preventDefault();
			}
		}
	});
};

export default focusTrapInMobileMenu;
