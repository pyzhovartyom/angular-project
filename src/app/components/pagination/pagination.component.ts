import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/_services/events.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  constructor(
    public eventsService: EventsService
  ) {
  }

  ngOnInit(): void {
  }

}
