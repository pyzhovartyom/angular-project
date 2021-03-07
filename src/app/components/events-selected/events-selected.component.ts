import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EventItem } from 'src/app/_models/event';
import { PricesInfo } from 'src/app/_models/prices-info';
import { DataService } from 'src/app/_services/data.service';
import { EventsService } from 'src/app/_services/events.service';
import { SettingsService } from 'src/app/_services/settings.service';
import { TicketsService } from 'src/app/_services/tickets.service';

@Component({
  selector: 'app-events-selected',
  templateUrl: './events-selected.component.html',
  styleUrls: ['./events-selected.component.scss']
})
export class EventsSelectedComponent implements OnInit {

  public pricesInfo?: PricesInfo;

  constructor(
    private _dataService: DataService,
    public eventsService: EventsService,
    public settingsService: SettingsService,
    private _ticketsService: TicketsService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit(): void {
      this._activatedRoute.params
      .pipe()
      .subscribe((params: Params) => {
        this.eventsService.isLoadingEvents = true;
        const CURRENT_EVENT_ID: string = String(params.id);
        this._dataService.loadEventById(CURRENT_EVENT_ID)
        .subscribe((event: EventItem) => {
          this._ticketsService.selectedSeats = [];
          this._ticketsService.sumToPay = 0;
          if (event === null) {
            this.eventsService.isLoadingEvents = false;
            this.eventsService.isEventFound = false;
          } else {
            this.eventsService.isEventFound = true;
            this.eventsService.selectedEvent = event;
            this.eventsService.isLoadingEvents = false;
          }
        })
        this._dataService.loadEventPricesById(CURRENT_EVENT_ID)
        .subscribe((pricesInfo: PricesInfo) => {
          this.pricesInfo = pricesInfo
        })
      })
  }

  public toTickets(id: string): void {
    this._router.navigate(['events', id, 'tickets']);
  }

}
