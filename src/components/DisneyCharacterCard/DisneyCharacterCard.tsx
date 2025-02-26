import { useEffect, useState } from "react";
import "./DisneyCharacterCard.scss";

type DisneyCharacterCardProps = {
	id: number;
};

type DisneyCharacter = {
	_id: number;
	films: string[];
	shortFilms: string[];
	tvShows: string[];
	videoGames: string[];
	parkAttractions: string[];
	allies: string[];
	enemies: string[];
	sourceUrl: string;
	name: string;
	imageUrl: string;
	createdAt: string;
	updatedAt: string;
	url: string;
	__v: number;
};

export default function DisneyCharacterCard({
	id,
}: Readonly<DisneyCharacterCardProps>) {
	const [loading, setLoading] = useState(true);
	const [disneyCharacter, setDisneyCharacter] =
		useState<DisneyCharacter | null>(null);

	useEffect(() => {
		const url = `https://api.disneyapi.dev/character/${id}`;
		let ignore = false;

		const fetchData = async () => {
			const result = await fetch(url);
			const data = (await result.json()).data as DisneyCharacter;
			if (!ignore) {
				setDisneyCharacter(data);
				setLoading(false);
			}
		};

		fetchData();

		return () => {
			ignore = true;
		};
	}, []);

	return (
		<div className="DisneyCharacterCard">
			<h2>DisneyCharacterCard</h2>
			{loading ? (
				<p>loading...</p>
			) : (
				<>
					<p>Name: {disneyCharacter?.name}</p>
					<img
						alt={disneyCharacter?.name}
						src={disneyCharacter?.imageUrl}
					/>
				</>
			)}
		</div>
	);
}
