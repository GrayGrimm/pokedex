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
      setPokemon(fetchedPokemon);
      setDisplayedpokemon(fetchedPokemon);
    };
    fetchAllPokemon();
  }, []);

  return (
    <>
      <div className="pokemon-list">
        <h1>Welceome to the Pokedex Landing Page</h1>
        
      </div>
    </>
  );
};

export default Home;
