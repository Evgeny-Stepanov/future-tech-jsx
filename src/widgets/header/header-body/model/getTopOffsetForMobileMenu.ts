const getTopOffsetForMobileMenu = (mobileMenuWrapper: HTMLDialogElement) => {
	const parentOfMobileMenuWrapper =
		mobileMenuWrapper.parentElement as HTMLDivElement;
	const offsetTopOfParentOfMobileMenuWrapper =
		parentOfMobileMenuWrapper.offsetTop;
	const offsetHeightOfParentOfMobileMenuWrapper =
		parentOfMobileMenuWrapper.offsetHeight;

	const offsetTopForMobileMenuWrapper =
		offsetTopOfParentOfMobileMenuWrapper +
		offsetHeightOfParentOfMobileMenuWrapper;

	return `${offsetTopForMobileMenuWrapper}px`;
};

export default getTopOffsetForMobileMenu;
