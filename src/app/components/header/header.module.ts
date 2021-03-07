import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';
import { BurgerMenuComponent } from '../burger-menu/burger-menu.component';
import { SharedModule } from '../../shared.module';
import { SettingsService } from 'src/app/_services/settings.service';
import { ActionsService } from 'src/app/_services/actions.service';
import { EventsService } from 'src/app/_services/events.service';
import { HeaderRoutingModule } from './header-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    BurgerMenuComponent,
  ],
  exports: [
    HeaderComponent,
    BurgerMenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    HeaderRoutingModule
  ],
  providers: [
    SettingsService,
    ActionsService,
    EventsService
  ],
})
export class HeaderModule { }
