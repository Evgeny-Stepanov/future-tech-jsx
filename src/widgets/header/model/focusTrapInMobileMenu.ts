type FocusableElement = HTMLLinkElement | HTMLButtonElement;

const focusTrapInMobileMenu = (mobileMenu: HTMLDialogElement) => {
	const focusableElements = mobileMenu.querySelectorAll("a, button");
	const firstFocusableElement = focusableElements[0] as FocusableElement;
	const lastFocusableElement = focusableElements[
		focusableElements.length - 1
	] as FocusableElement;

	const handleKeyDown = (
		event: KeyboardEvent,
		firstFocusableElement: FocusableElement,
		lastFocusableElement: FocusableElement
	) => {
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
	};

	mobileMenu.onkeydown = (event) => {
		handleKeyDown(event, firstFocusableElement, lastFocusableElement);
	};
};

export default focusTrapInMobileMenu;
