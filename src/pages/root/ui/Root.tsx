import Preheader from "@/widgets/preheader";
import Header from "@/widgets/header";
import { Outlet } from "react-router";
import Prefooter from "@/widgets/prefooter";
import Footer from "@/widgets/footer";

const Root = () => {
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
