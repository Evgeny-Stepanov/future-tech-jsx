import { mobileMediaWidth } from "@/shared/config/globalVariables";

const addStylesForMobile = () => {
	const footerColumns = document.querySelectorAll(".footer__column");

	if (footerColumns.length % 2 !== 0 && mobileMediaWidth) {
		const lastColumn = footerColumns[footerColumns.length - 1];
		lastColumn.classList.add("footer__column--is-wide");
	}
};

export default addStylesForMobile;
