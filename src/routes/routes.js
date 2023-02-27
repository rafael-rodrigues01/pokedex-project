import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { PokemonDetail } from "../pages/PokemonDetails";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/pokemon-detail/:id" element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
