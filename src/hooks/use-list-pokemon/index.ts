import React from "react";
import pokedex from "../../metadata/pokedex.json";

export interface Pokemon {
  id: string;
  image: {
    sprite: string;
    thumbnail: string;
    hires?: string;
  };
  type: string[];
  name: string;
}

export const useListPokemon = (filter: string) => {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);
  const timeoutRef = React.useRef<NodeJS.Timeout | undefined>(undefined);

  // Initialize list of pokemon on mount
  React.useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      const pokemonList: Pokemon[] = [];

      for (const item of pokedex) {
        const queryName = item.name.english.toLocaleLowerCase();
        if (!filter.length || queryName.includes(filter?.toLocaleLowerCase())) {
          pokemonList.push({
            id: item.id.toString(),
            name: item.name.english,
            type: item.type,
            image: {
              sprite: item.image.sprite,
              thumbnail: item.image.thumbnail,
              hires: item.image.hires,
            },
          });
        }
      }

      setPokemons(pokemonList);
    });
  }, [filter]);

  return { pokemons };
};
