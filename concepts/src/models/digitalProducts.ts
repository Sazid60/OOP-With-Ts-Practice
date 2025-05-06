import { Product } from "./product";

export class DigitalProduct extends Product {
  // sku : string;
  // downloadSizeInMB :number;

  constructor(
    id: number,
    name: string,
    price: number,
    quantity: number,
    public downloadSizeInMB: number
  ) {
    super(id, name, price, quantity);
    // this.downloadSizeInMB = downloadSizeInMB;
  }

  getDownloadInfo(): string {
    return `${this.name} is Downloading. Size: ${this.downloadSizeInMB}`;
  }

  sell(unit: number): string {
    if (unit > this.quantity) {
      return `Bhai! Product Sesh. Pre Order Den Parale`;
    } else {
      this.quantity -= unit;
    }

    return `${this.name} have been sold ${unit} units `;
  }
}
