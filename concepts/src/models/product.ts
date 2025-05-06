export class Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  // Id Names Are Bricks

  // constructor is the machine which will take the properties and build with the brick

  constructor(id: number, name: string, price: number, quantity: number) {
    // initializer means it will set in the computer memory
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = price;
  }

  getDetails(): string {
    return `Product: ${this.name} - ${this.price} stock : ${this.quantity} `;
  }

  getStockValue(): number {
    return this.price * this.quantity;
  }
}
