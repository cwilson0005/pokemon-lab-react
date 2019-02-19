import React from 'react';

const PokemonSelector = (props) => {
  console.log("props:", props);
  const options = props.allPokemon.map((pokemon, index) => {
    return <option value={index} key={index}>{pokemon.name}</option>
  })

  function handleChange(event){
    props.handlePokemonSelected(event.target.value);
  }

  return (
    <select id="Pokemon-selector" defaultValue="default" onChange={handleChange}>
      <option disabled value="default">Choose a Pokemon...</option>
      {options.results}
    </select>
  )
}

export default PokemonSelector;
