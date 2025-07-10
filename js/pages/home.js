import { products } from "../data/products.js";

function productCard(product) {
  return `<article>
        <h3>${product.name}</h3>
        <p>${product.category}
        <a href="product#${product.id}">Detail</a>
     </article>`;
}

function Products() {
  return `<h2>Products</h2>
    ${products.map(productCard).join("")}`;
}

export default function render() {
  document.getElementById("app").innerHTML = Products();
}
