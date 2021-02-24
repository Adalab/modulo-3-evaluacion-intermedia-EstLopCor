import "../styleshets/App.scss";
import data from "../data/data.json";
import PokeList from "./PokeList";

console.log(data);
function App() {
  return (
    <div>
      <PokeList />
    </div>
  );
}

export default App;
