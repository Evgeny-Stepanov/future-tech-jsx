import LinkWithIcon from "@/shared/ui/LinkWithIcon";
import "./Preheader.scss";

const Preheader = () => {
	return (
		<div className="preheader container">
			<LinkWithIcon
				title="Subscribe to our Newsletter For New & latest Blogs and Resources"
				href="/"
			/>
		</div>
	);
};

export default Preheader;
