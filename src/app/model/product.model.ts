export class Product {

  constructor(
    public id: number,
    public name: string,
    public amount: number = 0,
    public type: string,
    public price: number,
    public measureType: string,
    public description: string
  ) {
  }
}
