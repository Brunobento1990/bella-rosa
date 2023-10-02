import { Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "./layout";
import { Home } from "./pages/home/indext";
import { Favorities } from "./pages/favorities";
import { Categories } from "./pages/categories";
import { AnimatePresence } from "framer-motion";
import { Account } from "./pages/account";
import { CategorieView } from "./pages/categories/categories-view/categorie-view";
import { Login } from "./pages/login";
import { CreateClient } from "./pages/account/create";

export function AppRoutes() {

  const location = useLocation();

  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/account" element={<Layout><Account /></Layout>} />
          <Route path="/favorites" element={<Layout><Favorities /></Layout>} />
          <Route path="/categories" element={<Layout><Categories /></Layout>} />
          <Route path="/categories/view/:id" element={<Layout><CategorieView /></Layout>} />
          <Route path="/account/login" element={<Layout><Login /></Layout>} />
          <Route path="/account/create-client" element={<Layout><CreateClient /></Layout>} />
        </Routes>
      </AnimatePresence>
    </>
  )
}