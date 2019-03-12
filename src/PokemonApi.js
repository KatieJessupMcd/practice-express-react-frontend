import axios from "axios";
// condensed in one file to make the 
// axios requests to the backend

const BASE_URL = "http://localhost:3001/pokemon";

class PokemonApi {
  static async getPokemon() {
    const response = await axios.get(BASE_URL);
    return response.data.pokemonList;
  }
}

export default PokemonApi;
