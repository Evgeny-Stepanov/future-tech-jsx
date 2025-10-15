const getTopAndLeftOffsetOfMobileMenuCloseButton = (
	burgerButton: HTMLButtonElement
) => {
	const burgerButtonParent = burgerButton.parentElement as HTMLDivElement;

	const topOffsetOfBurgerButtonParent = burgerButtonParent.offsetTop;
	const topOffsetOfBurgerButton = burgerButton.offsetTop;
	const topOffsetOfMobileMenuCloseButton =
		topOffsetOfBurgerButtonParent + topOffsetOfBurgerButton;

	const leftOffsetOfMobileMenuCloseButton = burgerButton.offsetLeft;

	return [
		`${topOffsetOfMobileMenuCloseButton}px`,
		`${leftOffsetOfMobileMenuCloseButton}px`,
	];
};

export default getTopAndLeftOffsetOfMobileMenuCloseButton;
