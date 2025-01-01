import bucket from "../assets/bucket.jpg";
import "../styles/products-page.css";

export default function ProductsPage() {
  return (
    <>
      <main>
        <section>
          <h1>Products</h1>
          <div class="products">
            <button class="product">
              <img  class="product__img"src={bucket} alt="A grey bucket" />
              <p class="product__price">$10</p>
              <p class="product__name">Durable 10-Gallon Multipurpose Grey Storage Bucket</p>
              <p class="product__provider">Gina Taliso</p>
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
