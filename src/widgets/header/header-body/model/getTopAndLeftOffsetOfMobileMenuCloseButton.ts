import getCSSRootVariableValue from "@/shared/utils/getCSSRootVariableValue";

const getTopAndLeftOffsetOfMobileMenuCloseButton = (
	burgerButton: HTMLButtonElement
) => {
	const burgerButtonParent = burgerButton.parentElement as HTMLDivElement;

	const topOffsetOfBurgerButtonParent = burgerButtonParent.offsetTop;
	const topOffsetOfBurgerButton = burgerButton.offsetTop;
	const topOffsetOfMobileMenuCloseButton =
		topOffsetOfBurgerButtonParent + topOffsetOfBurgerButton;

	const leftOffsetOfBurgerButton = burgerButton.offsetLeft;
	const leftPaddingOfContainer = parseFloat(
		getCSSRootVariableValue("--container-padding-x")
	);
	const leftOffsetOfMobileMenuCloseButton =
		leftOffsetOfBurgerButton + leftPaddingOfContainer;

	return [
		`${topOffsetOfMobileMenuCloseButton}px`,
		`${leftOffsetOfMobileMenuCloseButton}px`,
	];
};

export default getTopAndLeftOffsetOfMobileMenuCloseButton;
