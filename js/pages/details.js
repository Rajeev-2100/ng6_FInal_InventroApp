import { products } from "../data/products.js";

function getHash() {
  const hash = window.location.hash.replace("#", "");
  return Number(hash);
}

function featuresList(features) {
  return `<li>${features}</li>`;
}

function ProductDetails(details) {
  console.log(details.name);

  return `<article>
        <hgroup>
            <h1>${details.name}</h1>
            <p>${details.category}</p>
        </hgroup>
        <p>${details.details}</p>
        <footer>
            <h3>Features</h3>
             <p>${details?.features?.map(featuresList).join("")}</p>
            <a href="/">Back</a>
        </footer>
        </article>`;
}

function ErrorBanner() {
  return `<hgroup>
            <h2>Product Id Not Founds</h2>
            <p>Look again, this pet is not present in the db. Go Back to home.</p>
        </hgroup>`;
}

export default function render() {
  const productId = getHash();

  function isProductWithId(product) {
    return product.id === productId;
  }

  const product = products.find(isProductWithId);

  if (!product) {
    document.getElementById("app").innerHTML = ErrorBanner();
    return;
  }

  const productDetails = ProductDetails(products[0]);
  document.getElementById("app").innerHTML = productDetails;
}
