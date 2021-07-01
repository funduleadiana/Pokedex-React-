import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [pokemon, setPokemon] = useState('pikachu');
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");

  const getPokemon = async ()=> {
    const toArray = [];
    try{
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const response = await axios.get(url);
      console.log(response)
    }catch(err){
      console.error(err)
    }
  }
  useEffect(()=> {
    getPokemon();
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
