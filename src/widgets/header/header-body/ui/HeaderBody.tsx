import "./HeaderBody.scss";
import { Button } from "@/shared/ui/Button";
import { HeaderMenu } from "./HeaderMenu";
import LogoWithText from "./logo-with-text.svg?react";

type HeaderProps = {
	titleForLogoLink: string;
};

export const HeaderBody = ({ titleForLogoLink }: HeaderProps) => {
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
				title="Contact Us"
				type="button"
			/>
		</div>
	);
};
