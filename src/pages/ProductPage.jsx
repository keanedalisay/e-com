import bucket from "../assets/bucket.jpg";
import "../styles/product-page.css";

export default function ProductPage() {
  return (
    <>
      <main>
        <section>
          <img class="product__img" src={bucket} alt="A grey bucket" />
          <h1 class="product__price">$10</h1>
          <p class="product__stock product__stock--out">In stock: 21</p>
          <h2 class="product__name">
            Durable 10-Gallon Multipurpose Grey Storage Bucket
          </h2>
          <p class="product__provider">Gina Taliso</p>
          <button class="product__add-to-cart">Add to Cart</button>
        </section>
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
            The Durable 10-Gallon Multipurpose Grey Storage Bucket is your go-to
            solution for a variety of tasks, whether indoors or outdoors. Made
            from high-quality, BPA-free plastic, this bucket combines strength
            and versatility, making it ideal for cleaning, organizing,
            gardening, and more. Its sleek grey finish seamlessly complements
            any setting, from modern homes to industrial workspaces.
          </p>
        </section>
      </main>
    </>
  );
}
