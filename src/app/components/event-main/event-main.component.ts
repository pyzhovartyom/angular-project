import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-main',
  templateUrl: './event-main.component.html',
  styleUrls: ['./event-main.component.scss']
})
export class EventMainComponent implements OnInit {

  @Input()
  artistName: string = '';

  @Input()
  eventImages: string[] = [];

  @Input()
  eventName: string = '';

  @Input()
  eventStart: number = 0;

  public eventValidImage: string | undefined = '';

  constructor() {
  }

  ngOnInit(): void {
    this._catchValidImage(this.eventImages);
  }

  private _catchValidImage(eventImages: string[]): void {
    if (this.eventImages.length !== 0) {
      this.eventValidImage = eventImages.find(Boolean);
    }
  }
}
