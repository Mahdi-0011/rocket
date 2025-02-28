import { useEffect, useState } from "react";
import "./LukeCard.scss";

type SWPeopleProps = {
	id: number;
};

type SWPeople = {
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
	


export default function LukeCard({id}: Readonly<SWPeopleProps>) {
	const [loading, setLoading] = useState(true);
	/*const [name, setName] = useState("");
	const [height, setHeight] = useState("");
	const [eyeColor, setEyeColor] = useState("");*/
	const [person , setPerson] = useState<SWPeople | null>(null);

	useEffect(() => {
		const url = `https://swapi.dev/api/people/${id}`;
		let ignore = false;

		const fetchData = async () => {
			const result = await fetch(url);
			const data = await result.json() as SWPeople;
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
		<div className="LukeCard">
			<h2>LukeCard</h2>
			{loading ? (
				<p>loading...</p>
			) : (
				<>
					<p>Name: {person?.name}</p>
					<p>height: {person?.height} cm</p>
					<p>Eye color: {person?.eye_color}</p>
					<p>skin_color: {person?.skin_color}</p>
					<p>birth_year:{person?.birth_year} </p>
					<p>gender: {person?.gender} </p>
				</>
			)}
		</div>
	);
}
