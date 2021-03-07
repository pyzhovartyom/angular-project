import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/_services/events.service';

@Component({
  selector: 'app-selected-event-title',
  templateUrl: './selected-event-title.component.html',
  styleUrls: ['./selected-event-title.component.scss']
})
export class SelectedEventTitleComponent implements OnInit {

  constructor(
    public eventsService: EventsService
  ) { }

  ngOnInit(): void {
  }

}
