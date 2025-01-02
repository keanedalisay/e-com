import { render } from "preact";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductPage from "./pages/ProductPage";

import Cart from "./models/Cart";

import "./index.css";

const CartState = new Cart();


function App() {
  return (
    <>
      <Header cart={CartState}></Header>
      <ProductPage cart={CartState}></ProductPage>
      <Footer></Footer>
    </>
  );
}

render(
  <App />
  ,
  document.getElementById("app")
);
