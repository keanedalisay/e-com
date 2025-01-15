import { render } from "preact";
import { LocationProvider, Router } from "preact-iso";

import Cart from "./models/Cart";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

import "./index.css";

const CartState = new Cart();

function App() {
  return (
    <>
      <LocationProvider>
        <Router>
          <Home path="/"></Home>
          <ProductPage path="/products/12121-3231" cart={CartState}></ProductPage>
        </Router>
      </LocationProvider>
    </>
  );
}

render(
  <>
    <Header cart={CartState}></Header>
    <App />
    <Footer></Footer>
  </>
  ,
  document.getElementById("app")
);
