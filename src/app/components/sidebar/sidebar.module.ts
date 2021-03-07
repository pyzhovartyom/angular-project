import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import { SidebarComponent } from './sidebar.component';
import { EventMiniComponent } from '../event-mini/event-mini.component';
import { EventsService } from 'src/app/_services/events.service';
import { SharedModule } from 'src/app/shared.module';
import { SettingsService } from 'src/app/_services/settings.service';
import { CommonModule } from '@angular/common';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    SidebarComponent,
    EventMiniComponent,
  ],
  exports: [
    SidebarComponent,
    EventMiniComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    SharedModule,
    FullCalendarModule
  ],
  providers: [
    EventsService,
    SettingsService
  ],
})
export class SidebarModule { }
