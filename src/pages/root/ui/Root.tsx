import { useEffect } from "react";
import Preheader from "@/widgets/preheader";
import Header from "@/widgets/header";
import { Outlet } from "react-router";
import Prefooter from "@/widgets/prefooter";
import Footer from "@/widgets/footer";

const Root = () => {
	useEffect(() => {
		const handleGlobalClick = (event: MouseEvent) => {
			const target = event.target as HTMLElement;
			const link = target.closest("a");

			if (!link || link.closest("header.header")) {
				return;
			}

			event.preventDefault();
		};

		document.addEventListener("click", handleGlobalClick);

		return () => {
			document.removeEventListener("click", handleGlobalClick);
		};
	}, []);

	return (
		<>
			<Preheader />
			<Header />
			<main className="container">
				<Outlet />
			</main>
			<Prefooter />
			<Footer />
		</>
	);
};

export default Root;
