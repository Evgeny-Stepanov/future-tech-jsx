import "./Header.scss";
import LogoWithText from "./logo-with-text.svg?react";

export const Header = () => {
	return (
		<div className="header__body">
			<a
				href="/"
				className="header__logo"
			>
				<LogoWithText
					width={179}
					height={50}
				/>
			</a>
		</div>
	);
};
