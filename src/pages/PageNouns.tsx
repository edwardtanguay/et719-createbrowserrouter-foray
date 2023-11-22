import { useLoaderData } from "react-router-dom";

const PageNouns = () => {
	const nouns = useLoaderData() as string[];

	return (
		<>
		<p className="sysmessage">Loading with createBrowserRouter-loader and suspense, but doesn't work: spinner isn't shown.</p>
		<p>There are {nouns.length} nouns.</p>
		</>
	);
};

export default PageNouns;
