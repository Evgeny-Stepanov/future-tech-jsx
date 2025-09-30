import { NavLink } from "react-router";
import { type FC } from "react";
import classNames from "classnames";
import headerMenuItems from "../model/headerMenuItems";

type HeaderDesktopMenuProps = {
	isHiddenMobile?: true;
};

const HeaderDesktopMenu: FC<HeaderDesktopMenuProps> = ({ isHiddenMobile }) => {
	return (
		<nav className={isHiddenMobile && "hidden-mobile"}>
			<ul className="header__list">
				{headerMenuItems.map(({ title, path }) => (
					<li key={title}>
						<NavLink
							to={path}
							className={({ isActive }) =>
								isActive
									? classNames("header__link", "header__link--is-current")
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
