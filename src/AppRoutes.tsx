import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import { Home } from "./pages/home/indext";
import { Favorities } from "./pages/favorities";
import { Categories } from "./pages/categories";

export function AppRoutes(){
    return(
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/favorites" element={<Layout><Favorities /></Layout>} />
          <Route path="/categories" element={<Layout><Categories /></Layout>} />
        </Routes>
    )
}