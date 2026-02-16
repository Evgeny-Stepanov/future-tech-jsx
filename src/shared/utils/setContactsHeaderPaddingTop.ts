const setContactsHeaderPaddingTop = (header: HTMLElement) => {
	//* Rewritten fluid from functions.scss
	const fluid = (max: number, min: number, isEndOfLaptop = false) => {
		const containerDesktopWidth = 1600;
		const containerLaptopWidth = 1280;

		const maxViewportWidth = containerDesktopWidth;
		const minViewportWidth = isEndOfLaptop ? containerLaptopWidth : 390;

		const maxSize = max / 16;
		const minSize = min / 16;
		const maxWidth = maxViewportWidth / 16;
		const minWidth = minViewportWidth / 16;

		const slope = (maxSize - minSize) / (maxWidth - minWidth);
		const yAxisIntersection = -minWidth * slope + minSize;

		return `clamp(${minSize}rem, ${yAxisIntersection}rem + ${slope * 100}vw, ${maxSize}rem)`;
	};

	header.style.paddingBlock = "0px"; //* for useEffect

	const headerHeight = header.offsetHeight;
	const sectionHeight = header.closest("section")!.offsetHeight;

	const blockPadding = Math.floor((sectionHeight - headerHeight) / 2);

	if (blockPadding === 0) {
		header.style.paddingBlock = fluid(80, 40);
	} else {
		header.style.paddingBlock = `${blockPadding}px`;
	}
};

export default setContactsHeaderPaddingTop;
