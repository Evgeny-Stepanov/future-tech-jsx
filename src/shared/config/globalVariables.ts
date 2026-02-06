const desktopMediaWidth = window.matchMedia("(width > 1023px)").matches;
const tabletAndMobileMediaWidth = window.matchMedia("(width < 768px)").matches;
const mobileMediaWidth = window.matchMedia("(width <= 480px)").matches;

export { desktopMediaWidth, tabletAndMobileMediaWidth, mobileMediaWidth };
