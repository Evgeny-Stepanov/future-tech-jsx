import "./MainInfo.scss";
import { type FC } from "react";
import EbooksIconSVG from "./ebooks.svg?react";
import WhitepapersIconSVG from "./whitepapers.svg?react";
import {
	ebooksMainInfoItem,
	whitepapersMainInfoItem,
} from "../model/mainInfoItems";
import LinkWithIcon from "@/shared/ui/LinkWithIcon";
import TextWrapper from "./TextWrapper";
import TitleWithDescriptionAndIcon from "@/shared/ui/TitleWithDescriptionAndIcon";

type MainInfoProps = {
	content: "ebooks" | "whitepapers";
};

const MainInfo: FC<MainInfoProps> = ({ content }) => {
	const data =
		content === "ebooks" ? ebooksMainInfoItem : whitepapersMainInfoItem;

	const Icon =
		content === "ebooks" ? (
			<EbooksIconSVG
				width={80}
				height={80}
			/>
		) : (
			<WhitepapersIconSVG
				width={80}
				height={80}
			/>
		);

	return (
		<div className="resources__main-info">
			<TitleWithDescriptionAndIcon
				icon={Icon}
				title={data.mainTitle}
				description={data.mainDescription}
			/>

			<LinkWithIcon
				title={data.mainButtonText}
				href="/"
				hasBorder
				hasGrayBackground
			/>

			<TextWrapper
				description="Downloaded By"
				title="10k+ Users"
				hasImageOrButton="image"
				imageSrc={data.mainUsersImageSrc}
				imageAlt="Photos of users"
			/>
		</div>
	);
};

export default MainInfo;
