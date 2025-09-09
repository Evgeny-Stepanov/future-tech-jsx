import "./HeaderIntro.scss";
import { LinkWithArrow } from "@/shared/ui/LinkWithArrow";

export const HeaderIntro = () => {
	return (
		<div className="header__intro">
			<LinkWithArrow
				title="Subscribe to our Newsletter For New & latest Blogs and Resources"
				href="/"
			/>
		</div>
	);
};
