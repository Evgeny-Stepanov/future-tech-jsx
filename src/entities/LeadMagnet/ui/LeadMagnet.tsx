import { type FC } from "react";
import MainInfo from "./MainInfo";
import DescriptiveInfo from "./DescriptiveInfo";

type LeadMagnetProps = {
	content: "ebooks" | "whitepapers";
};

const LeadMagnet: FC<LeadMagnetProps> = ({ content }) => {
	return (
		<>
			<MainInfo content={content} />
			<DescriptiveInfo content={content} />
		</>
	);
};

export default LeadMagnet;
