import "./DescriptiveInfo.scss";
import { type FC } from "react";
import {
	ebooksDescriptiveInfoItem,
	whitepapersDescriptiveInfoItem,
} from "@/widgets/resources/model/descriptiveInfoItems";
import TextWrapper from "./TextWrapper";

type DescriptiveInfoProps = {
	content: "ebooks" | "whitepapers";
};

const DescriptiveInfo: FC<DescriptiveInfoProps> = ({ content }) => {
	const data =
		content === "ebooks"
			? ebooksDescriptiveInfoItem
			: whitepapersDescriptiveInfoItem;

	return (
		<div className="resources__descriptive-info">
			<div className="resources__descriptive-info-header">
				<h4>{data.descriptiveTitle}</h4>
				<p>{data.descriptiveDescription}</p>
			</div>

			<div className="resources__descriptive-info-image">
				<img
					src={data.descriptiveImageSrc}
					alt={data.descriptiveImageAlt}
				/>
			</div>

			<TextWrapper
				title={data.descriptiveTotalNumber}
				description={data.descriptiveTotalDescription}
			/>

			<TextWrapper
				title="PDF format for access."
				description="Download Formats"
				hasImageOrButton="button"
				linkTitle="Preview"
				href="/"
			/>

			<TextWrapper
				title={data.descriptiveAuthorExpertise}
				description="Average Author Expertise"
			/>
		</div>
	);
};

export default DescriptiveInfo;
