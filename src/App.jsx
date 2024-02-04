import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import Favorites from "./pages/Favorites";
import Layout from "./components/Layout";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
