import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./layout/Header";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Pages from "./pages/Pages/Pages";
import Blog from "./pages/Blog/Blog";
import Footer from "./layout/Footer";
import Add from "./pages/Add/Add";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="pages" element={<Pages />} />
        <Route path="blog" element={<Blog />} />
        <Route path="add" element={<Add />} />
      </Routes>
    </>
  );
}

export default App;
