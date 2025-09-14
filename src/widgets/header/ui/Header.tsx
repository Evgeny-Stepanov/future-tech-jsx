import HeaderIntro from "../header-intro";
import HeaderBody from "../header-body";

const Header = () => {
	return (
		<header className="header">
			<HeaderIntro />
			<HeaderBody titleForLogoLink="Перейти на домашнюю страницу" />
		</header>
	);
};

export default Header;
