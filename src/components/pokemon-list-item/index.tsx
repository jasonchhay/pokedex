import React from "react";
import { Pokemon } from "../../hooks/use-list-pokemon";
import { Box, Link } from "@mui/material";

interface Props {
  pokemon: Pokemon;
}

export const PokemonListItem: React.FC<Props> = (props) => {
  return (
    <Box display="flex" alignItems="center">
      <img src={props.pokemon.image.sprite} height="40" loading="lazy" />
      <Link href={`pokemon/${props.pokemon.id}`}>{props.pokemon.name}</Link>
    </Box>
  );
};
