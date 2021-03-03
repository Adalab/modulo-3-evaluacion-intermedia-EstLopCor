import PropTypes from "prop-types";
import "../styleshets/_pokemon.scss";

const Pokemon = (props) => {
  console.log();
  const itemTypes = props.pokeProp.types.map((types, id) => {
    return (
      <li key={id} className="article__list--item">
        {types}
      </li>
    );
  });
  Pokemon.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string,
    types: PropTypes.array,
  };
  return (
    <article className="article">
      <img
        src={props.pokeProp.url}
        alt={props.pokeProp.name}
        title="Foto de pokemon"
      />
      <h2 className="article__title">{props.pokeProp.name}</h2>
      <ul className="article__list">{itemTypes}</ul>
    </article>
  );
};
export default Pokemon;
