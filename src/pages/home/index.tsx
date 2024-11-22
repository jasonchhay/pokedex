import React from "react";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useListPokemon } from "../../hooks/use-list-pokemon";
import { PokemonList } from "../../components/pokemon-list";
import { SearchBar } from "../../components/search-bar";

export const Home: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState<string>("");

  const { pokemons } = useListPokemon(searchValue);

  // const { data } = useQuery({
  //   queryKey: ["searchPokemonByName", searchValue],
  //   queryFn: () => fetch(`https://pokeapi.co/api/v2/pokemon-species/${searchValue.toLocaleLowerCase()}`).then((res) => res.json()),
  //   retry: false,
  // });

  // React.useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <Container component="main" maxWidth="lg">
      <Box display="flex" flexDirection="column" justifyContent={"center"} gap={4} paddingTop={5}>
        <Box flexDirection={"column"} display="flex" width="100%">
          <Typography variant="h6" gutterBottom>
            Pokedex
          </Typography>
          <SearchBar value={searchValue} onChange={setSearchValue} onSelect={() => {}} />
        </Box>
        <Box>
          <PokemonList pokemons={pokemons} />
        </Box>
      </Box>
    </Container>
  );
};
