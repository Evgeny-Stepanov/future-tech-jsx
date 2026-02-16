import LinkWithIcon from "@/shared/ui/LinkWithIcon";
import "./Accordion.scss";
import IconSVG from "./icon.svg?react";
import accordionItems from "../model/accordionItems";
import { useState } from "react";
import classNames from "classnames";
import setContactsHeaderPaddingTop from "@/shared/utils/setContactsHeaderPaddingTop";
import { useRef, useEffect } from "react";

const Accordion = () => {
	const [openItem, setOpenItem] = useState<number | null>(0);

	const toggleItem = (index: number) => {
		setOpenItem(openItem === index ? null : index);
	};

	const headerRef = useRef<HTMLElement>(null);
	useEffect(() => {
		const handleResize = () => {
			if (!headerRef.current) return;

			if (window.innerWidth > 1023) {
				setContactsHeaderPaddingTop(headerRef.current);
			} else {
				headerRef.current.style.removeProperty("padding-block");
			}
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<section className="accordion">
			<header
				className="accordion__header"
				ref={headerRef}
			>
				<div>
					<IconSVG
						width={80}
						height={80}
						aria-hidden="true"
					/>
				</div>
				<h2 className="h3">Asked question</h2>

				<p>
					If the question is not available on our FAQ section, Feel free to
					contact us personally, we will resolve your respective doubts.
				</p>

				<LinkWithIcon
					title="Ask Question"
					href="/"
					hasBorder
					hasGrayBackground
				/>
			</header>

			<ul className="accordion__list">
				{accordionItems.map(({ title, description }, index) => (
					<li
						key={title}
						className={classNames("accordion__item", {
							"accordion__item--is-open": openItem === index,
						})}
						onClick={() => toggleItem(index)}
					>
						<div>
							<h3 className="h6">{title}</h3>
							<button type="button"></button>
						</div>

						<div className="accordion__text-wrapper">
							<p>{description}</p>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Accordion;
