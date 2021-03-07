import { Component, OnInit } from '@angular/core';
import { ActionsService } from 'src/app/_services/actions.service';
import { EventsService } from 'src/app/_services/events.service';
import { SettingsService } from 'src/app/_services/settings.service';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})
export class BurgerMenuComponent implements OnInit {

  constructor(
    public settingsService: SettingsService,
    public actionsService: ActionsService,
    public eventsService: EventsService
  ) { }

  ngOnInit(): void {
  }

}
