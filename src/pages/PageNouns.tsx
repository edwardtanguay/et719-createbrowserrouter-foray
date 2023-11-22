import axios from "axios";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
	return new Promise((resolve) => {
		setTimeout(async () => {
			const nouns = (
				await axios.get(
					"https://edwardtanguay.vercel.app/share/germanNouns.json"
				)
			).data;
			resolve(nouns);
		}, 1000);
	});
};

const PageNouns = () => {
	const nouns = useLoaderData() as string[];

	return <p>There are {nouns.length} nouns.</p>;
};

export default PageNouns;
