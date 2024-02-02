import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Favorites from "./pages/Favorites";
import Layout from "./components/Layout";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <section style={{ padding: 40 }}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="catalog" element={<Catalog />} />
              <Route path="favorites" element={<Favorites />} />
              <Route path="*" element={<Home />} />
            </Route>
          </Routes>
        </section>
      </main>
    </>
  );
}

export default App;
