export class PricesInfo {
  public id: string = '';
  public minPrice: number = 0;
  public maxPrice: number = 0;
  public restTickets: number = 0;

  constructor (
  id: string,
  minPrice: number,
  maxPrice: number,
  restTickets: number,
  ) {
    this.id = id;
    this.minPrice = minPrice;
    this.maxPrice = maxPrice;
    this.restTickets = restTickets
  }

  public static fromJSON(json: any): PricesInfo {
    return new PricesInfo(
      json.eventId,
      json.maxPrice,
      json.minPrice,
      json.restTick,
    );
  }
}
