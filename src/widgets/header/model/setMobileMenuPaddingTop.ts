const setMobileMenuPaddingTop = (mobileMenu: HTMLDialogElement) => {
	const mobileMenuHeight = mobileMenu.querySelector("div")!.offsetHeight;
	const screenHeight = window.innerHeight;

	const blockPadding = Math.floor((screenHeight - mobileMenuHeight) / 2);

	mobileMenu.style.paddingBlock = `${blockPadding}px`;
};

export default setMobileMenuPaddingTop;
