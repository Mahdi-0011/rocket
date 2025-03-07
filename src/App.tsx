import "./App.scss";
import DisneyCharacterCard from "./components/DisneyCharacterCard/DisneyCharacterCard";
import DisPlayData from "./components/displayData/displayData";
import LukeCard from "./components/LukeCard/LukeCard";
import SWPeopleCard from "./components/SWPeopleCard/SWPeopleCard";
import DomRef from "./components/useref/useref";

function App() {
	return (
		<>
			<h1>rocket</h1>
			<DisPlayData/>
			<hr />
			<DomRef />
			{/*
			<p>a demo of useEffect</p>
			<div className="starwarscards">
			<LukeCard id={1}/>
			<LukeCard id={2}/>
			<SWPeopleCard id={2} />
			<SWPeopleCard id={3} />
			<SWPeopleCard id={22} />
			</div>
			<div className="disnycards">
			<DisneyCharacterCard id={308} />
			<DisneyCharacterCard id={20} />
			</div>*/}
		</>
	);
}

export default App;
