
export class Order {

  constructor(
    public id: number,
    public price: number,
    public deliveryTime: string,
    public deliveryPlace: string,
    public deliveryProblem: string,
    public isFinalized: boolean
  ) {
  }
}
