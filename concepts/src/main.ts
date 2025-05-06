import { Product } from "./models/product";

const sampleProduct = new Product(1, "Demo-Product", 20, 50);

console.log(sampleProduct.getDetails());
