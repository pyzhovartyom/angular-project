export class Seat {
  code: string = '';
  color: string = '';
  isSold: boolean = false;
  isSelected: boolean = false;
  number: number = 0;
  price: number = 0;
  row: string = '';

  constructor (
    number: number,
    code: string,
    row: string
  ) {
    this.number = number;
    this.code = code;
    this.row = row
  }
}
