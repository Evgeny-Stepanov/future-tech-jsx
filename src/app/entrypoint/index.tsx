import "@/app/styles";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Root from "@/pages/root";
import HomePage from "@/pages/home";
import NewsPage from "@/pages/news";
import PodcastsPage from "@/pages/podcasts";
import ResourcesPage from "@/pages/resources";
import ContactsPage from "@/pages/contacts";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Root />}
				>
					<Route
						index
						element={<HomePage />}
					/>
					<Route
						path="/news"
						element={<NewsPage />}
					/>
					<Route
						path="/podcasts"
						element={<PodcastsPage />}
					/>
					<Route
						path="/resources"
						element={<ResourcesPage />}
					/>
					<Route
						path="/contacts"
						element={<ContactsPage />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
