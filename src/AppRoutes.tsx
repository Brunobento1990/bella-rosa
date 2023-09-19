import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import { Home } from "./pages/home/indext";

export function AppRoutes(){
    return(
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/favorites" element={<Layout><p>Favoritos</p></Layout>} />
          <Route path="/categories" element={<Layout><p>categories</p></Layout>} />
        </Routes>
    )
}