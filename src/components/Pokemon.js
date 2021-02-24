const Pokemon = (props) => {
  console.log();
  const itemTypes = props.pokeProp.types.map((types, index) => {
    return (
      <li key={index} className="article__list--item">
        {types}
      </li>
    );
  });

  return (
    <article className="article">
      <img src={props.pokeProp.url} alt="Pokemon" title="Foto de pokemon" />
      <h2 className="article__title">{props.pokeProp.name}</h2>
      {/* <p>Evoluciona a: {props.pokeProp.evolution}</p> */}
      <ul className="article__list">{itemTypes}</ul>
    </article>
  );
};
export default Pokemon;
