import "./NewLabel.scss";
import { type FC } from "react";
import formatStringToLowercaseWithDashes from "@/shared/utils/formatStringToLowercaseWithDashes";

type NewLabelProps = {
	title: string;
};

const NewLabel: FC<NewLabelProps> = ({ title }) => {
	return (
		<span
			id={formatStringToLowercaseWithDashes(title)}
			className="footer__new-label"
		>
			New
		</span>
	);
};

export default NewLabel;
