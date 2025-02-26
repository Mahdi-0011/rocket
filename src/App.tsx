import "./App.scss";
import LukeCard from "./components/LukeCard/LukeCard";
import SWPeopleCard from "./components/SWPeopleCard/SWPeopleCard";

function App() {
	return (
		<>
			<h1>rocket</h1>
			<p>a demo of useEffect</p>
			<LukeCard />
			<SWPeopleCard id={2} />
			<SWPeopleCard id={3} />
			<SWPeopleCard id={22} />
		</>
	);
}

export default App;
