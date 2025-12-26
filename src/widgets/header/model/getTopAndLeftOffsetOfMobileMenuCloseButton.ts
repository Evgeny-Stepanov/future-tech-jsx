const getTopAndLeftOffsetOfMobileMenuCloseButton = (
	burgerButton: HTMLButtonElement
) => {
	const burgerButtonParent = burgerButton.parentElement as HTMLDivElement;

	const topOffsetOfBurgerButtonParent = burgerButtonParent.offsetTop;
	const topOffsetOfBurgerButton = burgerButton.offsetTop;
	const topOffsetOfMobileMenuCloseButton =
		topOffsetOfBurgerButtonParent + topOffsetOfBurgerButton - window.scrollY;

	const leftOffsetOfMobileMenuCloseButton = burgerButton.offsetLeft;

	console.log(window.scrollY);

	return [
		`${topOffsetOfMobileMenuCloseButton}px`,
		`${leftOffsetOfMobileMenuCloseButton}px`,
	];
};

export default getTopAndLeftOffsetOfMobileMenuCloseButton;
