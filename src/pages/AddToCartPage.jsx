import bucket from "../assets/bucket.jpg";
import "../styles/add-to-cart-page.css";

export default function AddToCartPage() {
  return (
    <>
      <main>
        <section>
          <img class="product__img" src={bucket} alt="A grey bucket" />
          <h1 class="product__price">$10</h1>
          <p class="product__name">
            Durable 10-Gallon Multipurpose Grey Storage Bucket
          </p>
          <p class="product__stock product__stock--out">In stock: 21</p>
        </section>
        <section class="quantity">
          <h2 class="quantity__label">You are buying: <b>1 item/s</b></h2>
          <div class="wrapper">
            <button class="quantity__btn">+</button>
            <button class="quantity__btn">-</button>
          </div>
        </section>
        <section>
          <button class="product__add-to-cart">Add to Cart</button>
        </section>
      </main>
    </>
  );
}
