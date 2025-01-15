import { Component } from "preact";

import Product from "../models/Product";

import bucket from "../assets/bucket.jpg";
import "../styles/product-page.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

class QuantitySelector extends Component {
  constructor() {
    super();
    this.state = { quantity: 0 };
  }

  increaseQuantity = () => this.setState(this.state.quantity += 1);

  decreaseQuantity = () => this.setState(() => {
    if (this.state.quantity > 0)
      this.state.quantity -= 1;
    return this.state;
  });

  resetQuantity = () => this.setState(this.state.quantity = 0)

  render({cart, product}, state) {
    return <>
      <section class="quantity">
        <h2 class="quantity__label">You are buying: <b>{state.quantity} item/s</b></h2>
        <div class="wrapper">
          <button class="quantity__btn" onClick={this.increaseQuantity}>+</button>
          <button class="quantity__btn" onClick={this.decreaseQuantity}>-</button>
        </div>
      </section>
      <section>
          <form onSubmit={(e) => {
            this.resetQuantity()
            cart.add(e)
            }}>
            <input name="name" type="hidden" value={product.name}></input>
            <input name="distributor" type="hidden" value={product.dstbr}></input>
            <input name="quantity" type="hidden" value={state.quantity}></input>
            <button class="product__add-to-cart" type="submit">Add to Cart</button>
          </form>
      </section>
    </>
  }
}

export default class ProductPage extends Component {
  constructor() {
    super();
    this.state = new Product();
  }

  async componentDidMount() {
    const result = await (await fetch("http://localhost:3000/products/1", { mode: "cors" })).json();

    this.setState(() => {
      this.state.name = result.name;
      this.state.price = result.price;
      this.state.dstbr = result.distributor;
      this.state.inStock = result["in-stock"];
      this.state.desc = result.description;

      return this.state;
    });
  }
  
  render ({cart}, state) {
    if (state.name === "") {
      return <>
        <div>Loading... </div>
      </>
    }

    return <>
      <Header cart={cart}></Header>
      <main>
        <section>
          <img class="product__img" src={bucket} alt="A grey bucket" />
          <h1 class="product__price">${state.price}</h1>
          <p class="product__stock product__stock--out">In stock: {state.inStock}</p>
          <h2 class="product__name">
            {state.name}
          </h2>
          <p class="product__provider">Distributed by Gina Taliso</p>
        </section>
        <QuantitySelector cart={cart} product={state}></QuantitySelector>
        <section>
          <h3>Specifications</h3>
          <p>Material: BPA-free high-density polyethylene (HDPE)</p>
          <p>Capacity: 10 gallons (37.8 liters)</p>
          <p>Dimensions: 15" diameter x 17" height</p>
          <p>Color: Grey</p>
          <p>Weight: 2.5 lbs</p>
        </section>
        <section>
          <h3>Description</h3>
          <p class="product__desc">
            {state.desc}
          </p>
        </section>
      </main>
      <Footer></Footer>
    </>;
  }
}
