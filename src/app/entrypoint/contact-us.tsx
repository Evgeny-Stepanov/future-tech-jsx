import "@/app/styles";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ContactUsPage from "@/pages/contact-us";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ContactUsPage />
	</StrictMode>
);
