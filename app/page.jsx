"use client";
import { useState, useEffect } from "react";
import PokemonList from "./Details/PokemonList";
import PokemonSearch from "./PokemonSearch/PokemonSearch";
import * as pokemonService from "./services/pokemonService";

const Home = () => {
  const [pokemon, setPokemon] = useState([]);
  const [displayedPokemon, setDisplayedpokemon] = useState([]);
  useEffect(() => {
    const fetchAllPokemon = async () => {
      const fetchedPokemon = await pokemonService.index();
      console.log(fetchedPokemon);
      setPokemon(fetchedPokemon.results);
      setDisplayedpokemon(fetchedPokemon.results);
    };
    fetchAllPokemon();
  }, []);

  return (
    <>
      <div className="pokemon-list">
        <h1>Welcome to the Pokedex Landing Page</h1>
        <ul>
          {pokemon.map((mon) => (
            <li key={mon.name}>{mon.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
