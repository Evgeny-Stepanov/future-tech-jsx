const getTopOffsetForMobileMenuWrapper = (
	mobileMenuWrapper: HTMLDialogElement
) => {
	const parentOfMobileMenuWrapper =
		mobileMenuWrapper.parentElement as HTMLDivElement;

	const offsetTopOfParentOfMobileMenuWrapper =
		parentOfMobileMenuWrapper.offsetTop;

	const heightOfParentOfMobileMenuWrapper =
		parentOfMobileMenuWrapper.offsetHeight;

	const offsetTopForMobileMenuWrapper =
		offsetTopOfParentOfMobileMenuWrapper + heightOfParentOfMobileMenuWrapper;

	return `${offsetTopForMobileMenuWrapper}px`;
};

export default getTopOffsetForMobileMenuWrapper;
