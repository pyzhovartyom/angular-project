import { Component, OnInit } from '@angular/core';
import { Seat } from 'src/app/_models/seat';
import { SelectedSeat } from 'src/app/_models/selected-seat';
import { EventsService } from 'src/app/_services/events.service';
import { TicketsService } from 'src/app/_services/tickets.service';
@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.scss']
})
export class HallComponent implements OnInit {

  constructor(
    public eventsService: EventsService,
    public ticketsService: TicketsService
  ) {
  }

  ngOnInit(): void {
    this.ticketsService.selectedSeats = [];
  }

  selectSeat(seat: Seat): void {
    if (!seat.isSold) {
      seat.isSelected = !seat.isSelected;
      const ID: string = `${seat.row}-${seat.code}`;
      let selectedSeatIndex: number = 0
      const isSeatSelected: SelectedSeat | undefined = this.ticketsService.selectedSeats
        .find((item: SelectedSeat, index: number) => {
          selectedSeatIndex = index;
          return item.id === ID;
        })
      if (isSeatSelected) {
        this.ticketsService.selectedSeats.splice(selectedSeatIndex, 1);
        this.ticketsService.sumToPay -= seat.price;
      } else {
        this.ticketsService.selectedSeats.push(new SelectedSeat(ID, seat))
        this.ticketsService.sumToPay += seat.price;
      }
    }
  }

}
