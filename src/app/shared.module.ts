import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { IconsComponent } from './components/icons/icons.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { LoadingComponent } from './components/loading/loading.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { EventsService } from './_services/events.service';
import { SelectedEventTitleComponent } from './components/selected-event-title/selected-event-title.component';
import { EventNotFoundComponent } from './components/event-not-found/event-not-found.component';
import { TicketsService } from './_services/tickets.service';
@NgModule({
  declarations: [
    IconsComponent,
    LoadingComponent,
    PaginationComponent,
    SelectedEventTitleComponent,
    ShoppingListComponent,
    EventNotFoundComponent,
  ],
  exports: [
    IconsComponent,
    LoadingComponent,
    PaginationComponent,
    SelectedEventTitleComponent,
    ShoppingListComponent,
    EventNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    EventsService,
    TicketsService
  ],
})
export class SharedModule { }
