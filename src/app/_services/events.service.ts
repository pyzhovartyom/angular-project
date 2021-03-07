import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventItem } from '../_models/event';
import { HallData } from '../_models/hall-data';
import { LoadingDates } from '../_models/loading-dates';
import { PriceRange } from '../_models/price-range';
import { DataService } from './data.service';

@Injectable()
export class EventsService {

  public eventList: EventItem[] = [];
  public currentEventList: EventItem[] = [];
  public upcomingEventList: EventItem[] = [];
  public selectedEvent?: EventItem;

  public isLoadingSidebar: boolean = true;
  public isLoadingEvents: boolean = true;
  public isEventFound: boolean = true;



  public dateRanges: LoadingDates = {
    "dateFrom": 1564952400000,
    "dateTo": 1618866000000
  }
  public calendarCounter: number = 0;

  public currentPage: number = 0;
  public eventsOnPage: number = 4;
  public pages: number = 1;

  public loadingAllEvents$: Observable<EventItem[]> = this._dataService.loadEventsList(
    0,
    99,
    this.dateRanges
  )

  constructor(
    private _dataService: DataService
  ) {
    this._dataService.upcomingEventList$
      .subscribe((data: EventItem[]) => {
        this.upcomingEventList = data;
        this.isLoadingSidebar = false;
      })
  }

  public getPages(): void {
    this.pages = Math.ceil(this.eventList.length / 4) - 1;
  }

  public toNextPage(): void {
    this.currentPage++;
    this.loadingEvents();
  }

  public toPrevPage(): void {
    this.currentPage--;
    this.loadingEvents();
  }

  public resetPages(): void {
    this.calendarCounter = 0;
    this.currentPage = 0;
    this.dateRanges.dateFrom = 1564952400000;
    this.dateRanges.dateTo = 1618866000000;
    this.loadingEvents();
    this.loadingAllEvents$
      .subscribe((data: EventItem[]) => {
        this.eventList = data;
        this.getPages();
      })
  }

  public loadingEvents(): void {
    this.isLoadingEvents = true;
    this._dataService.loadEventsList(
      this.currentPage,
      this.eventsOnPage,
      this.dateRanges
    )
    .subscribe((data: EventItem[]) => {
      this.currentEventList = data
      this.isLoadingEvents = false;
    })
  }
}
