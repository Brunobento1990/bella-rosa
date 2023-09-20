import { Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "./layout";
import { Home } from "./pages/home/indext";
import { Favorities } from "./pages/favorities";
import { Categories } from "./pages/categories";
import { AnimatePresence } from "framer-motion";
import { Account } from "./pages/account";

export function AppRoutes() {

  const location = useLocation();

  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/login" element={<Layout><p>teste</p></Layout>} />
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/account" element={<Layout><Account /></Layout>} />
          <Route path="/favorites" element={<Layout><Favorities /></Layout>} />
          <Route path="/categories" element={<Layout><Categories /></Layout>} />
        </Routes>
      </AnimatePresence>
    </>
  )
}