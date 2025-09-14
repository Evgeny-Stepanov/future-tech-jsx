import Header from "@/widgets/header";
import { Outlet } from "react-router";

const Root = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default Root;
