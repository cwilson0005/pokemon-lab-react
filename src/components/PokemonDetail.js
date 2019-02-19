import React from 'react';

const PokemonDetail = (props) => {
  console.log("PokemonDetail:", props.currentPokemon);
  if (!props.currentPokemon) return null;
  return (
    <h3>
      {props.currentPokemon.name}
    </h3>
  )
}

export default PokemonDetail;
