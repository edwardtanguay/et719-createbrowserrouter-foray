import { useLoaderData } from "react-router-dom";

export const PageTodos = () => {
	const todos = useLoaderData() as string[];
	return (
		<>
			<p className="sysmessage">
			Loads immediately, so spinner isn't necessary.
			</p>
			<p>There are {todos.length} todos.</p>
		</>
	);
};
