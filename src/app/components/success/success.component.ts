import { Component, OnDestroy, OnInit } from '@angular/core';
import { TicketsService } from 'src/app/_services/tickets.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit, OnDestroy {

  constructor(
    public ticketsService: TicketsService
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.ticketsService.sumToPay = 0;
    this.ticketsService.selectedSeats = [];
  }

  download() {
    alert('Downloading')
  }

}
