import React from "react";
import { Pokemon } from "../../hooks/use-list-pokemon";
import { PokemonListItem } from "../pokemon-list-item";

interface Props {
  pokemons: Pokemon[];
}

export const PokemonList: React.FC<Props> = (props) => {
  return (
    <>
      {props.pokemons.map((pokemon) => (
        <PokemonListItem key={pokemon.id} pokemon={pokemon} />
      ))}
    </>
  );
};
