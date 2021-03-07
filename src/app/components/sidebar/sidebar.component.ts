import { Component, Input, OnInit } from '@angular/core';
import { EventsService } from 'src/app/_services/events.service';
import { SettingsService } from 'src/app/_services/settings.service';
import { CalendarOptions } from '@fullcalendar/angular';
import { DataService } from 'src/app/_services/data.service';
import { EventItem } from 'src/app/_models/event';
import { LoadingDates } from 'src/app/_models/loading-dates';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public dateRangesStr: LoadingDates = {
    dateFrom: '',
    dateTo: ''
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),
    height: 350
  };

  constructor(
    public eventsService: EventsService,
    public settingsService: SettingsService,
    private _dataService: DataService
  ) { }

  ngOnInit(): void {
  }

  handleDateClick(dateInfo: any) {
    let dateTime: number = dateInfo.date.getTime();
    this.eventsService.currentPage = 0;
    if (this.eventsService.calendarCounter === 0) {
      this.eventsService.dateRanges.dateFrom = dateTime;
      this.eventsService.dateRanges.dateTo = dateTime;
      this.dateRangesStr.dateFrom = dateInfo.date;
      this.dateRangesStr.dateTo = dateInfo.date;
    } else if (this.eventsService.calendarCounter > 0) {
      if (dateTime > this.eventsService.dateRanges.dateTo) {
        this.eventsService.dateRanges.dateTo = dateTime;
        this.dateRangesStr.dateTo = dateInfo.date;
      } else {
        this.eventsService.dateRanges.dateFrom = dateTime;
        this.dateRangesStr.dateFrom = dateInfo.date;
      }
    }
    this.eventsService.loadingAllEvents$
      .subscribe((data: EventItem[]) => {
        this.eventsService.eventList = data;
        this.eventsService.getPages();
      })
    this.eventsService.isEventFound = true;
    this.eventsService.loadingEvents();
    this.eventsService.calendarCounter++
  }

}
