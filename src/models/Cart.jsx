import { signal } from "@preact/signals";

export default class Cart {
  constructor() {
    this.count = signal(0);
    this.items = [];
  }

  add = (e) => { 
    e.preventDefault();

    const item = new FormData(e.target);

    if (item.get("quantity") > 0) {
      this.items.push(
        {
          name: item.get("name"), 
          distributor: item.get("distributor"),
          count: item.get("quantity")
        }
      );
      this.count.value++; 
    }
  };
}
