import { Seat } from "./seat";

export class SelectedSeat {
  id: string;
  seatInfo: Seat;

  constructor(
    id: string,
    seatInfo: Seat,
  ) {
    this.id = id;
    this.seatInfo = seatInfo
  }
}
