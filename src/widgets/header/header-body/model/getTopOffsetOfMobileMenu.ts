const getTopOffsetOfMobileMenu = (mobileMenu: HTMLDialogElement) => {
	const mobileMenuParent = mobileMenu.parentElement as HTMLDivElement;
	const topOffsetOfMobileMenuParent = mobileMenuParent.offsetTop;
	const heightOfMobileMenuParent = mobileMenuParent.offsetHeight;
	const topOffsetOfMobileMenu =
		topOffsetOfMobileMenuParent + heightOfMobileMenuParent;

	return `${topOffsetOfMobileMenu}px`;
};

export default getTopOffsetOfMobileMenu;
