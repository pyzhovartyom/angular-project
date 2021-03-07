import { Injectable } from '@angular/core';
import { Hall } from '../_models/hall';
import { HallData } from '../_models/hall-data';
import { LockedSeats } from '../_models/locked-seats';
import { PriceRange } from '../_models/price-range';
import { Seat } from '../_models/seat';
import { SelectedSeat } from '../_models/selected-seat';
import { EventsService } from './events.service';

@Injectable()
export class TicketsService {

  public fakePriceRange: PriceRange[] = [
    {
      color: '#fafafa',
      price: 100,
      rows: ['1', '2', '3']
    }
  ];
  public fakeLockedSeats: LockedSeats[] = [
    {
      row: '',
      seats: []
    }
  ]
  public hall: Hall = new Hall(12, 14);
  public selectedEventHallData: HallData = {
    priceRanges: this.fakePriceRange,
    lockedSeats: this.fakeLockedSeats
  };
  public selectedSeats: SelectedSeat[] = [];
  public sumToPay: number = 0;
  public storage: SelectedSeat[] = [];

  constructor(
    private _eventsService: EventsService
  ) { }

  setDataToSeats(): void  {
    if (this._eventsService.selectedEvent?.hall) {
      this.hall = new Hall(9, 17);
    } else {
      this.hall = new Hall(15, 11);
    }

    this._fromLocalStorage();

    this.hall.rows.forEach((row: Seat[], rowIndex: number) => {
        for (let item of this.selectedEventHallData.priceRanges) {
          let isRowFound = item.rows.find((rowValue: string) => rowValue === String(rowIndex + 1));
          if (isRowFound) {
            for (let seat of row) {
              seat.color = item.color;
              seat.price = item.price;
            }
          }
        }
        for (let item of this.selectedEventHallData.lockedSeats) {
          let isRowFound: boolean = item.row === String(rowIndex + 1);
          if (isRowFound) {
            for (let seat of row) {
              let isCodeFound = item.seats.find((code: string) => seat.code === code);
              if (isCodeFound) {
                seat.isSold = true
              }
            }
          }
        }
        for (let item of this.storage) {
          let isRowFound: boolean = item.seatInfo.row === String(rowIndex + 1);
          if (isRowFound) {
            for (let seat of row) {
              if (seat.code === item.seatInfo.code) {
                seat.isSold = true;
              }
            }
          }
        }
      })
      this.storage = [];
  }

  public ticketsToLocalStorage(): void {
    this._soldSeats();
    const STORAGE_DATA = localStorage.getItem(this._eventsService.selectedEvent!.eventId);
    if (STORAGE_DATA) {
      this.storage = JSON.parse(STORAGE_DATA);
      this.storage = this.storage.concat(this.selectedSeats);
      localStorage.setItem(this._eventsService.selectedEvent!.eventId, JSON.stringify(this.storage));
      this.storage = [];
    } else {
      localStorage.setItem(this._eventsService.selectedEvent!.eventId, JSON.stringify(this.selectedSeats))
    }
  }

  private _fromLocalStorage(): void {
    const STORAGE_DATA = localStorage.getItem(this._eventsService.selectedEvent!.eventId);
    if (STORAGE_DATA) {
      this.storage = JSON.parse(STORAGE_DATA);
    }
  }

  private _soldSeats(): void {
    for (let item of this.selectedSeats) {
      item.seatInfo.isSold = true;
    }
  }
}
