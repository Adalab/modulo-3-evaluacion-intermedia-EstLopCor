const Pokemon = (props) => {
  const itemTypes = props.pokeProp.types.map((types, index) => {
    return <li key={index}>{types}</li>;
  });

  return (
    <article>
      <img src="{props.pokeProp.url}" alt="Pokemon" title="Foto de pokemon" />
      <h2>{props.pokeProp.name}</h2>
      {/* <p>Evoluciona a: {props.pokeProp.evolution}</p> */}
      <ul>{itemTypes}</ul>
    </article>
  );
};
export default Pokemon;
