import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EventItem } from 'src/app/_models/event';
import { HallData } from 'src/app/_models/hall-data';
import { DataService } from 'src/app/_services/data.service';
import { EventsService } from 'src/app/_services/events.service';
import { TicketsService } from 'src/app/_services/tickets.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  constructor(
    public eventsService: EventsService,
    public ticketsService: TicketsService,
    private _dataService: DataService,
    private _activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.ticketsService.selectedSeats = [];
    this.ticketsService.sumToPay = 0;

    this._activatedRoute.params
      .pipe()
      .subscribe((params: Params) => {
        this.eventsService.isLoadingEvents = true;
        const CURRENT_EVENT_ID: string = String(params.id);
        if (CURRENT_EVENT_ID.match(/[A-Za-z0-9]/)) {
          this._dataService.loadHallData(CURRENT_EVENT_ID)
          .subscribe((hallData: HallData) => {
            this.ticketsService.selectedEventHallData = hallData;
            this.ticketsService.setDataToSeats()
          })
          this._dataService.loadEventById(CURRENT_EVENT_ID)
          .subscribe((event: EventItem) => {
            if (event === null) {
              this.eventsService.isLoadingEvents = false;
              this.eventsService.isEventFound = false;
            } else {
              this.eventsService.isEventFound = true;
              this.eventsService.selectedEvent = event;
              this.eventsService.isLoadingEvents = false;
            }
          })
        } else {
          this.eventsService.isLoadingEvents = false;
          this.eventsService.isEventFound = false;
        }
      }
    )
  }
}
