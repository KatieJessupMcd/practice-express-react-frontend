import React, { Component } from 'react';
import './App.css';
// IMPORT components and API call file
import PokemonApi from "./PokemonApi";
 import PokemonList from "./PokemonList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList : [] 
    }
    // bind functions 
    this.getPokemonList = this.getPokemonList.bind(this);
  }

  // componentDidMount - make any calls you need
  async componentDidMount() {
    await this.getPokemonList();
  }

  async getPokemonList(){
    const pokemonRequests = [PokemonApi.getPokemon()]
    const pokemonList = await Promise.all(pokemonRequests);
    this.setState( { pokemonList } ) 
  }


  render() {
    // DECONSTRUCT whatever you need from state
    const { pokemonList } = this.state;
    return (
      <div className="App">
        <div>
          <PokemonList pokemonList={pokemonList}/>
        </div>
      </div>
    );
  }
}

export default App;
