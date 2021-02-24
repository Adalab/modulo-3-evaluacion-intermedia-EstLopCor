import "../styleshets/App.scss";
import data from "../data/data.json";
import PokeList from "./PokeList";

console.log(data);
function App() {
  return (
    <div>
      <h1 className="title">Mi lista de pokemon</h1>
      <PokeList pokemons={data} />
    </div>
  );
}

export default App;
