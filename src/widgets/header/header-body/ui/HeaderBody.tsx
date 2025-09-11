import "./HeaderBody.scss";
import { type FC } from "react";
import Button from "@/shared/ui/Button";
import HeaderMenu from "./HeaderMenu";
import LogoWithText from "./logo-with-text.svg?react";

type HeaderProps = {
	titleForLogoLink: string;
};

const HeaderBody: FC<HeaderProps> = ({ titleForLogoLink }) => {
	return (
		<div className="header__body">
			<a
				href="/"
				className="header__logo"
				aria-label={titleForLogoLink}
				title={titleForLogoLink}
			>
				<LogoWithText
					width={179}
					height={50}
					aria-hidden="true"
				/>
			</a>

			<HeaderMenu />

			<Button
				mode="link"
				href="/contact-us"
				title="Contact Us"
			/>
		</div>
	);
};

export default HeaderBody;
