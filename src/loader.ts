import axios from "axios";

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

