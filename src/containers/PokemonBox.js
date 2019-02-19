import React from "react";
import PokemonSelector from '../components/PokemonSelector';
import PokemonDetail from '../components/PokemonDetail';

class PokemonBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      allPokemon: [],
      selectedPokemon: null
    };
  }

  componentDidMount(){
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({allPokemon: data})
    });

    request.send();
  }

  handlePokemonSelected(index){
    const selectedPokemon = this.state.allPokemon[index];
    this.setState({currentPokemon: selectedPokemon})
  }

  render(){
    return (
      <div>
        <h2>Pokemon Container</h2>
        <PokemonSelector
          allPokemon={this.state.allPokemon} handlePokemonSelected={this.handlePokemonSelected}/>
        <PokemonDetail country={this.state.currentPokemon}/>
      </div>
    );
  }
}

export default PokemonBox;
