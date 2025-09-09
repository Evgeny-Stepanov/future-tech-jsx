import "./HeaderMenu.scss";
import { headerMenuItems } from "../model/headerMenuItems";

export const HeaderMenu = () => {
	return (
		<ul className="header__menu">
			{headerMenuItems.map(({ title, href }) => (
				<li
					className="header__item"
					key={title}
				>
					<a
						href={href}
						className="header__link"
					>
						{title}
					</a>
				</li>
			))}
		</ul>
	);
};
