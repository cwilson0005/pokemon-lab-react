import React from 'react';

const PokemonSelector = (props) => {
  console.log("props:", props);
  if (props.allPokemon.results){
    const options = props.allPokemon.results.map((pokemon, index) => {
      return <option value={index} key={index}>{pokemon.name}</option>
    })
    console.log(options);
  }

  function handleChange(event){
    props.handlePokemonSelected(event.target.value);
  }

  return (
    <select id="Pokemon-selector" defaultValue="default" onChange={handleChange}>
      <option disabled value="default">Choose a Pokemon...</option>
      {options.props.children}
    </select>
  )
}

export default PokemonSelector;
