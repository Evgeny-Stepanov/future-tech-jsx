import Header from "@/widgets/header";
import { Outlet } from "react-router";

const Root = () => {
	return (
		<>
			<Header />
			<main className="container">
				<Outlet />
			</main>
		</>
	);
};

export default Root;
