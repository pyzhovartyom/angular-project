import { Component, OnInit } from '@angular/core';
import { SelectedSeat } from 'src/app/_models/selected-seat';
import { TicketsService } from 'src/app/_services/tickets.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  constructor(
    public ticketsService: TicketsService
  ) { }

  ngOnInit(): void {
  }

  deleteSeat(mouseEvent: any): void {
    const ID: string = mouseEvent.path[0].id;
    const SELECTED_SEATS: SelectedSeat[] = this.ticketsService.selectedSeats;
    const INDEX: number = SELECTED_SEATS
    .findIndex((item: SelectedSeat) => {
      return item.id === ID;
    })
    SELECTED_SEATS[INDEX].seatInfo.isSelected = !SELECTED_SEATS[INDEX].seatInfo.isSelected;
    this.ticketsService.sumToPay -= SELECTED_SEATS[INDEX].seatInfo.price;
    SELECTED_SEATS.splice(INDEX, 1);
  }

}
