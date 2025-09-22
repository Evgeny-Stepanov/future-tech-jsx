import getCSSRootVariableValue from "@/shared/utils/getCSSRootVariableValue";

const transitionDuration = parseFloat(
	getCSSRootVariableValue("--transition-duration")
);

const closeMobileMenu = (
	mobileMenuWrapper: HTMLDialogElement,
	burgerButton: HTMLButtonElement
) => {
	const mobileMenuClick = (event: MouseEvent) => {
		const currentTarget = event.currentTarget as HTMLDialogElement;
		const target = event.target as HTMLElement;
		const isClickedOnBackdrop = target === currentTarget;
		const isClickedOnActiveLink =
			target.className.includes("header__link--is-active") ||
			target.className.includes("button--is-active");

		if (isClickedOnBackdrop || !isClickedOnActiveLink) {
			burgerButton.classList.remove("header__burger-button--is-active");

			mobileMenuWrapper.classList.add("fade-in-left");

			setTimeout(() => {
				mobileMenuWrapper.classList.remove(
					"header__mobile-menu-wrapper--is-open"
				);
				currentTarget.close();
				mobileMenuWrapper.classList.remove("fade-in-left");
			}, transitionDuration * 1000);

			mobileMenuWrapper.removeEventListener("click", mobileMenuClick);
		}
	};

	mobileMenuWrapper.addEventListener("click", mobileMenuClick);
};

export default closeMobileMenu;
