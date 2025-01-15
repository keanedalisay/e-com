import { render } from "preact";
import { LocationProvider, Router } from "preact-iso";

import ProductPage from "./pages/ProductPage";

import Cart from "./models/Cart";

import "./index.css";

const CartState = new Cart();

function App() {
  return (
    <>
      <LocationProvider>
        <Router>
          <ProductPage path="/products/12121-3231" cart={CartState}></ProductPage>
        </Router>
      </LocationProvider>
    </>
  );
}

render(
  <App />
  ,
  document.getElementById("app")
);
