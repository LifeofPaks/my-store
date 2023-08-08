import "./App.scss";
import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Product from "./Pages/Product/Product";

const Layout = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
