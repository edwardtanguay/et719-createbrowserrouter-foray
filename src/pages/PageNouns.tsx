import { useLoaderData } from "react-router-dom";

const PageNouns = () => {
	const nouns = useLoaderData() as string[];

	return <p>There are {nouns.length} nouns.</p>;
};

export default PageNouns;
