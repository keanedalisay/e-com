export default class Product {
  constructor(name = "", price = 0, inStock = 0, dstbr = "", desc = "") {
    this.name = name;
    this.price = price;
    this.inStock = inStock;
    this.dstbr = dstbr;
    this.desc = desc;
  }
}
