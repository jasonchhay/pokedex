import { Container, Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";

export const PokemonPage: React.FC = () => {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["fetchPokemonById", id],
    queryFn: () => fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then((res) => res.json()),
  });

  if (!data) {
    return null;
  }

  return (
    <Container component="main" maxWidth="lg">
      <Box display="flex" flexDirection="column" justifyContent={"center"} gap={4} paddingTop={5}>
        {data.name}
      </Box>
    </Container>
  );
};
