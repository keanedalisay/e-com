import { render } from "preact";

import bucket from "./assets/bucket.jpg";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./index.css";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <section>
          <h1>Products</h1>
          <div class="products">
            <button class="product">
              <img  class="product__img"src={bucket} alt="A grey bucket" />
              <p class="product__price">$10</p>
              <p class="product__name">Bucket Tin Can Do Be Do </p>
              <p class="product__provider">Gina Taliso</p>
            </button>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

render(<App />, document.getElementById("app"));
