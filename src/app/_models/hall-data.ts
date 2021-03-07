import { LockedSeats } from "./locked-seats";
import { PriceRange } from "./price-range";

export class HallData {
  public priceRanges: PriceRange[];
  public lockedSeats: LockedSeats[];

  constructor (
    priceRanges: PriceRange[],
    lockedSeats: []
  ) {
    this.priceRanges = priceRanges;
    this.lockedSeats = lockedSeats;
  }

  public static fromJSON(json: any): HallData {
    return new HallData(
      json.priceRanges,
      json.lockedSeats,
    );
  }
}
