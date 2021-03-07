import { Component, OnInit } from '@angular/core';
import { TicketsService } from 'src/app/_services/tickets.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  public isChecked: boolean = false;

  constructor(
    public ticketsService: TicketsService
  ) { }

  ngOnInit(): void {
  }

  deleteSection(): void {
    this.ticketsService.sumToPay = 0;
    this.ticketsService.selectedSeats = [];
  }

  checkboxClick(): void {
    this.isChecked = !this.isChecked
  }

}
