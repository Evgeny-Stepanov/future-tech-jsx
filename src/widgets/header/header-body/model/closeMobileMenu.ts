import getCSSRootVariableValue from "@/shared/utils/getCSSRootVariableValue";

const transitionDuration = parseFloat(
	getCSSRootVariableValue("--transition-duration-longer")
);

const closeMobileMenu = (
	mobileMenuWrapper: HTMLDialogElement,
	burgerButton: HTMLButtonElement,
	toggleVisibilityMobileMenu
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

			mobileMenuWrapper.classList.add("fade-in-right");

			//TODO The animation lasts 0.4s, but sometimes the modal flickers at the end. At 0.35s it works correctly.
			setTimeout(
				() => {
					currentTarget.close();
					mobileMenuWrapper.classList.remove(
						"header__mobile-menu-wrapper--is-active",
						"fade-in-left",
						"fade-in-right"
					);
				},
				transitionDuration * 1_000 - 50
			);

			mobileMenuWrapper.removeEventListener("click", mobileMenuClick);
			toggleVisibilityMobileMenu();
		}
	};

	mobileMenuWrapper.addEventListener("click", mobileMenuClick);
};

export default closeMobileMenu;
