import getCSSRootVariableValue from "@/shared/utils/getCSSRootVariableValue";

const closeMobileMenu = () => {
	const mobileMenuWrapper = document.querySelector(
		".header__mobile-menu-wrapper"
	) as HTMLDialogElement;
	const burgerButton = document.querySelector(
		".header__burger-button"
	) as HTMLButtonElement;

	const handleClick = () => {
		console.log("click");
	};

	console.log(mobileMenuWrapper);

	//mobileMenuWrapper.addEventListener("click", handleClick);
};

/* const closeMobileMenu = (
	event: MouseEvent,
	mobileMenuWrapper,
	burgerButton
) => {
	const currentTarget = event.currentTarget as HTMLDialogElement;
	const target = event.target as HTMLElement;

	const transitionDuration = parseFloat(
		getCSSRootVariableValue("--transition-duration-longer")
	);

	const isClickedOnBackdrop = target === currentTarget;
	const isClickedOnActiveLink =
		target.className.includes("header__link--is-current") ||
		target.className.includes("button--is-current");

	if (isClickedOnBackdrop || target.matches(".header__link--is-current")) {
		burgerButton.classList.remove("header__burger-button--is-active");
		mobileMenuWrapper.classList.add("fade-in-right");

		//TODO The animation lasts 0.4s, but sometimes the modal flickers at the end. At 0.35s it works correctly.
		const timerId = setTimeout(
			() => {
				currentTarget.close();
				mobileMenuWrapper.classList.remove(
					"header__mobile-menu-wrapper--is-open",
					"fade-in-left",
					"fade-in-right"
				);
			},
			transitionDuration * 1_000 - 50
		);

		console.log("times");

		mobileMenuWrapper.removeEventListener("click", closeMobileMenu);
		//toggleMobileMenu();
	}
}; */

export default closeMobileMenu;
