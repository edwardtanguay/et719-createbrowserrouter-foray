import { useLoaderData } from "react-router-dom";

export const PageNouns = () => {
	const nouns = useLoaderData() as string[];

	console.log(111, nouns);
	return (
		<p>There are {nouns.length} nouns.</p>
	)
}
