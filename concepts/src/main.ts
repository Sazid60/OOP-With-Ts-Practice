import { Product } from "./models/product";

import { DigitalProduct } from "./models/digitalProducts";

// const sampleProduct = new Product(1, "Demo-Product", 20, 50);

// console.log(sampleProduct.getDetails());

// inheritance
const sampleProduct2 = new DigitalProduct(1, "Demo-Product", 20, 50, 26);

console.log(sampleProduct2.getDetails());
console.log(sampleProduct2.getDownloadInfo());
console.log(sampleProduct2.getStockValue());
