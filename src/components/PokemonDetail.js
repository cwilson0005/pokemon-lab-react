import React from 'react';

const PokemonDetail = ({pokemon}) => {
  if (!pokemon) return null;
  return (
    <h3>
      {pokemon.name}
    </h3>
  )
}

export default PokemonDetail;
