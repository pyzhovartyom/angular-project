import { Component, OnInit } from '@angular/core';
import { ActionsService } from 'src/app/_services/actions.service';
import { EventsService } from 'src/app/_services/events.service';
import { SettingsService } from '../../_services/settings.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public settingsService: SettingsService,
    public actionsService: ActionsService,
    public eventsService: EventsService
  ) { }

  ngOnInit(): void {
  }

}
