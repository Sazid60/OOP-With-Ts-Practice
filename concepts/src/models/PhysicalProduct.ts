import { Purchaseable } from "../interface/polymorphism";
import { Product } from "./product";

export class PhysicalProduct extends Product implements Purchaseable {
  getStockValue(): number {
    return this.price;
  }
}
