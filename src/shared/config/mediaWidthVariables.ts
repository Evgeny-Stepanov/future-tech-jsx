const tabletAndMobileMediaWidth = window.matchMedia("(width < 768px)").matches;
const mobileMediaWidth = window.matchMedia("(width <= 480px)").matches;

export { tabletAndMobileMediaWidth, mobileMediaWidth };
