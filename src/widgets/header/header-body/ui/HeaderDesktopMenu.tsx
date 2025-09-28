import "./HeaderMenu.scss";
import { NavLink } from "react-router";
import { type FC } from "react";
import classNames from "classnames";
import headerMenuItems from "../model/headerMenuItems";

type HeaderDesktopMenuProps = {
	classNamesForNavBar: string;
};

const HeaderDesktopMenu: FC<HeaderDesktopMenuProps> = ({
	classNamesForNavBar,
}) => {
	return (
		<nav className={classNamesForNavBar}>
			<ul className="header__list">
				{headerMenuItems.map(({ title, path }) => (
					<li
						className="header__item"
						key={title}
					>
						<NavLink
							to={path}
							className={({ isActive }) =>
								isActive
									? classNames("header__link", "header__link--is-active")
									: "header__link"
							}
						>
							{title}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default HeaderDesktopMenu;
