import { Header } from "../header";
import { PreHeader } from "../pre-header";

export const HeaderGroup = () => {
	return (
		<header className="header container">
			<PreHeader />
			<Header />
		</header>
	);
};
