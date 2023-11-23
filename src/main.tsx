/* eslint-disable react-refresh/only-export-components */
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import "./index.scss";
import {
	PageEmployees,
	loader as pageEmployeesLoader,
} from "./pages/PageEmployees.tsx";
import { PageAbout } from "./pages/PageAbout.tsx";
import { Page404 } from "./pages/Page404.tsx";
import { PageTodos } from "./pages/PageTodos.tsx";
import { lazy, Suspense } from "react";
import { loader as nounLoader } from './loader.ts';
import { PageEmployees2 } from "./pages/PageEmployees2.tsx";
import { PageEmployee } from "./pages/pageEmployee.tsx";
import { PageEmployees3 } from "./pages/PageEmployees3.tsx";

const PageNouns = lazy(() => import("./pages/PageNouns.tsx"));

const router = createBrowserRouter([
	{
		path: "/",
		errorElement: <Page404 />,
		element: <App />,
		children: [
			{
				path: "/todos",
				element: <PageTodos />,
				loader: async () => {
					return new Promise((resolve) => {
						resolve(["one", "two", "three", "four", "nnn", "jjj"]);
					});
				},
			},
			{
				path: "/nouns",
				element: (
					<Suspense fallback={<div>loading...</div>}>
						<PageNouns />
					</Suspense>
				),
				loader: nounLoader
			},
			{
				path: "/employees",
				element: <PageEmployees />,
				loader: pageEmployeesLoader,
			},
			{
				path: "/employees2",
				element: <PageEmployees2 />
			},
			{
				path: "/employee/:id",
				element: <PageEmployee />
			},
			{
				path: "/employees3",
				element: <PageEmployees3 />
			},
			{
				path: "about",
				element: <PageAbout />,
			},
			{
				path: "/",
				element: <Navigate to="/todos" />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<RouterProvider router={router} />
);
