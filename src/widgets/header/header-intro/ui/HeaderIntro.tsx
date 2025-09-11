import "./HeaderIntro.scss";
import LinkWithArrow from "@/shared/ui/LinkWithArrow";

const HeaderIntro = () => {
	return (
		<div className="header__intro">
			<LinkWithArrow
				title="Subscribe to our Newsletter For New & latest Blogs and Resources"
				href="/"
			/>
		</div>
	);
};

export default HeaderIntro;
