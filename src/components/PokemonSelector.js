import React from 'react';

const PokemonSelector = (props) => {

  const options = props.allPokemon.map((pokemon, index) => {
    return <option value={name}>{Pokemon.name}</option>
  })

  function handleChange(event){
    props.handlePokemonSelected(event.target.value);
  }

  return (
    <select id="Pokemon-selector" defaultValue="default" onChange={handleChange}>
      <option disabled value="default">Choose a Pokemon...</option>
      {options}
    </select>
  )
}

export default PokemonSelector;
