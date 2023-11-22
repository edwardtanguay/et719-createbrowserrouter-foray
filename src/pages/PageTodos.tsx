import { useLoaderData } from "react-router-dom";

export const PageTodos = () => {
	const todos = useLoaderData() as string[];
	return (
		<p>There are {todos.length} todos.</p>
	)
}
