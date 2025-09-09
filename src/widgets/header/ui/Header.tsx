import { HeaderIntro } from "../header-intro";
import { HeaderBody } from "../header-body";

export const Header = () => {
	return (
		<header className="header container">
			<HeaderIntro />
			<HeaderBody titleForLogoLink="Перейти на домашнюю страницу" />
		</header>
	);
};
