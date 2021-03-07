import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { EventItem } from 'src/app/_models/event';
import { Hall } from 'src/app/_models/hall';
import { DataService } from 'src/app/_services/data.service';
import { EventsService } from 'src/app/_services/events.service';
import { SettingsService } from 'src/app/_services/settings.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, OnDestroy {

  constructor(
    public eventsService: EventsService,
    public settingsService: SettingsService,
    private _dataService: DataService,
    private _router: Router
  ) {
  }

  ngOnInit(): void {
    this.eventsService.loadingAllEvents$
      .subscribe((data: EventItem[]) => {
        this.eventsService.eventList = data;
        this.eventsService.getPages();
      })
    this.eventsService.isEventFound = true;
    this.eventsService.loadingEvents();
  }

  ngOnDestroy(): void {
    this.eventsService.currentPage = 0;
  }

  public catchSelectedEventId(mouseEvent: any): void {
    const CATCHED_EVENT: HTMLElement = mouseEvent.path.find(
      (item: HTMLElement) => item.localName === "app-event-main");
    this._router.navigate(['events', String(CATCHED_EVENT.id)]);
  }
}
