import "./HeaderMenu.scss";
import { NavLink } from "react-router";
import headerMenuItems from "../model/headerMenuItems";

const HeaderMenu = () => {
	return (
		<nav>
			<ul className="header__list">
				{headerMenuItems.map(({ title, path }) => (
					<li
						className="header__item"
						key={title}
					>
						<NavLink
							to={path}
							className="header__link"
						>
							{title}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default HeaderMenu;
