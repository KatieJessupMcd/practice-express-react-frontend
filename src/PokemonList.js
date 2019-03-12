import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Child component

class PokemonList extends Component {
  render() {
    const { pokemonList } = this.props;
    
    return (
      <div>
        <div>
          <h1>This is the pokemon list!</h1>
        </div>
        <div>
          {pokemonList.map(p => (
            <p>{p.name}</p>
          ))}
        </div>
      </div>
    );
  }
}

// JokeList.propTypes = {
//   jokes: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       joke: PropTypes.string.isRequired,
//       votes: PropTypes.number.isRequired
//     })
//   ).isRequired
// };

// JokeList.defaultProps = {
//   jokes: []
// };

export default PokemonList;
