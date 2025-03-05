import { useEffect, useState } from "react";
import "./SWPeopleCard.scss";

type SWPeopleCardProps = {
	id: number;
};

export type SWPeople = {
	name: string;
	height: string;
	mass: string;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
	homeworld: string;
	films: string[];
	species: string[];
	vehicles: string[];
	starships: string[];
	created: string;
	edited: string;
	url: string;
};

export default function SWPeopleCard({ id }: Readonly<SWPeopleCardProps>) {
	const [loading, setLoading] = useState(true);
	const [person, setPerson] = useState<SWPeople | null>(null);

	useEffect(() => {
		const url = `https://swapi.dev/api/people/${id}`;
		let ignore = false;

		const fetchData = async () => {
			const result = await fetch(url);
			const data = (await result.json()) as SWPeople;
			if (!ignore) {
				setPerson(data);
				setLoading(false);
			}
		};

		fetchData();

		return () => {
			ignore = true;
		};
	}, []);

	return (
		<div className="SWPeopleCard">
			<h2>SWPeopleCard</h2>
			{loading ? (
				<p>loading...</p>
			) : (
				<>
					<p>Name: {person?.name}</p>
					<p>Height: {person?.height} cm</p>
					<p>Mass: {person?.mass} kg</p>
					<p>Eye color: {person?.eye_color}</p>
					<p>Birth year: {person?.birth_year}</p>
				</>
			)}
		</div>
	);
}
