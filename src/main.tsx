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
import { PageNouns } from "./pages/PageNouns.tsx";
import axios from "axios";

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
						resolve(["one", "two", "three", "four"]);
					});
				},
			},
			{
				path: "/nouns",
				element: <PageNouns />,
				loader: async () => {
					return (
						await axios.get(
							"https://edwardtanguay.vercel.app/share/germanNouns.json"
						)
					).data;
				},
			},
			{
				path: "/employees",
				element: <PageEmployees />,
				loader: pageEmployeesLoader,
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
