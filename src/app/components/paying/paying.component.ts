import { Component, OnInit } from '@angular/core';
import { TicketsService } from 'src/app/_services/tickets.service';

@Component({
  selector: 'app-paying',
  templateUrl: './paying.component.html',
  styleUrls: ['./paying.component.scss']
})
export class PayingComponent implements OnInit {

  constructor(
    public ticketsService: TicketsService
  ) { }

  ngOnInit(): void {
  }

}
