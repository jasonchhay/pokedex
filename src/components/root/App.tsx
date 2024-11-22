import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../../pages/home";
import { PokemonPage } from "../../pages/pokemon";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={null}>
            <Route index element={<Home />} />
            <Route path="pokemon/:id" element={<PokemonPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
