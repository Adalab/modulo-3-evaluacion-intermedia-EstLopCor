import React from "react";
import Pokemon from "./Pokemon";

const PokeList = (props) => {
  const item = props.pokemons.map((pokeItem, i) => {
    return (
      <li key={i}>
        <Pokemon pokeProp={pokeItem} />
      </li>
    );
  });
  return (
    <div>
      <ul className="pokeList">{item}</ul>
    </div>
  );
};

export default PokeList;
