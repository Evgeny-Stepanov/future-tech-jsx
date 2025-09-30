import "./BurgerButton.scss";
import { type FC } from "react";
import classNames from "classnames";

type BurgerButtonProps = {
	title: string;
	className?: string;
	onBurgerButtonClick: React.MouseEventHandler<HTMLButtonElement>;
};

const BurgerButton: FC<BurgerButtonProps> = ({
	title,
	className,
	onBurgerButtonClick,
}) => {
	return (
		<button
			type="button"
			className={classNames("burger-button", className)}
			aria-label={title}
			onClick={onBurgerButtonClick}
		>
			<div>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</button>
	);
};

export default BurgerButton;
