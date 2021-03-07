import { Seat } from "./seat";
export class Hall {
  public rows: [] = [];

  constructor (
    rowsQuantity: number,
    minSeats: number,
  ) {
    this.rows = this.renderRowsAndSeats(rowsQuantity, minSeats)
  }

  renderRowsAndSeats(rowsQuantity: number, minSeats: number): [] {
    const rows: any = [];
    let counter: number = minSeats
    for (let row: number = 0; row < rowsQuantity; row++) {
      const roundedCounterHalf: number = Math.ceil(counter / 2);
      let halfOfSeats: Seat[] = [];
      let anotherHalfOfSeats: Seat[] = [];
      if (counter % 2 !== 0) {
        for (let seat: number = 1; seat < roundedCounterHalf; seat++) {
          halfOfSeats.push(new Seat(seat, String(seat + 'L'), String(row + 1)))
          anotherHalfOfSeats.push(new Seat(seat, String(seat + 'R'), String(row + 1)))
        }
        halfOfSeats.push(new Seat(roundedCounterHalf, String(roundedCounterHalf + 'L'), String(row + 1)))
      } else {
        for (let seat: number = 1; seat <= roundedCounterHalf; seat++) {
          halfOfSeats.push(new Seat(seat, String(seat + 'L'), String(row + 1)))
          anotherHalfOfSeats.push(new Seat(seat, String(seat + 'R'), String(row + 1)))
        }
      }
      anotherHalfOfSeats.reverse()
      rows.push(halfOfSeats.concat(anotherHalfOfSeats))
      counter++
    }
    return rows
  }
}
