import { useEffect, useState } from "react";
import "./LukeCard.scss";

type LukeCardProps = {
	id: number;
};

type LukeCard = {
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
	


export default function LukeCard({id}: Readonly<LukeCardProps>) {
	const [loading, setLoading] = useState(true);
	const [name, setName] = useState("");
	const [height, setHeight] = useState("");
	const [eyeColor, setEyeColor] = useState("");
	const [perosn , setPerson] = useState("");

	useEffect(() => {
		const url = "https://swapi.dev/api/people/1";
		let ignore = false;

		const fetchData = async () => {
			const result = await fetch(url);
			const data = await result.json();
			if (!ignore) {
				setName(data.name);
				setHeight(data.height);
				setEyeColor(data.eye_color);
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
					<p>Name: {name}</p>
					<p>height: {height} cm</p>
					<p>Eye color: {eyeColor}</p>
					<p>skin_color: {}</p>
					<p>birth_year:{} </p>
					<p>gender: {} </p>
					<p>homeworld:{}</p>
				</>
			)}
		</div>
	);
}
