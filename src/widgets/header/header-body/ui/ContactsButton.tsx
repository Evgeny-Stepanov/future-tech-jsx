import { NavLink } from "react-router";
import { type FC } from "react";
import classNames from "classnames";

type ContactsButtonProps = {
	isVisibleInMobileMenu?: true;
};

const ContactsButton: FC<ContactsButtonProps> = ({ isVisibleInMobileMenu }) => (
	<NavLink
		to="/contacts"
		className={({ isActive }) =>
			isActive
				? classNames("button", "button--is-current", {
						"hidden-mobile": !isVisibleInMobileMenu,
					})
				: classNames("button", {
						"hidden-mobile": !isVisibleInMobileMenu,
					})
		}
	>
		Contact Us
	</NavLink>
);

export default ContactsButton;
