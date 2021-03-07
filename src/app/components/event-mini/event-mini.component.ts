import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/_services/events.service';

@Component({
  selector: 'app-event-mini',
  templateUrl: './event-mini.component.html',
  styleUrls: ['./event-mini.component.scss']
})
export class EventMiniComponent implements OnInit {

  @Input()
  public artistName: string = '';

  @Input()
  public eventImages: string[] = [];

  @Input()
  public eventStart: number = 0;

  public eventValidImage: string | undefined = '';

  constructor(
    public eventsService: EventsService,
    private _router: Router
  ) {
  }

  ngOnInit(): void {
    this._catchValidImage(this.eventImages);
  }

  private _catchValidImage(eventImages: string[]): void {
    if (this.eventImages.length !== 0) {
      this.eventValidImage = eventImages.find(Boolean);
    }
  }

  public catchSelectedEventId(mouseEvent: any): void {
    this.eventsService.isEventFound = true;
    const CATCHED_EVENT: HTMLElement = mouseEvent.path.find(
      (item: HTMLElement) => item.localName === "app-event-mini");
    this._router.navigate(['events', String(CATCHED_EVENT.id)]);
  }
}
