import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { EventsModule } from './components/events/events.module';
import { FooterModule } from './components/footer/footer.module';
import { PayingModule } from './components/paying/paying.module';
import { ShoppingCartModule } from './components/shopping-cart/shopping-cart.module';
import { ProceedPayingComponent } from './components/proceed-paying/proceed-paying.component';
import { SharedModule } from './shared.module';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { LoginModule } from './components/login/login.module';
import { ActionsService } from './_services/actions.service';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminGuardGuard } from './_guards/admin-guard.guard';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    ProceedPayingComponent,
    ConfirmationComponent,
    AboutComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HeaderModule,
    SidebarModule,
    EventsModule,
    FooterModule,
    PayingModule,
    ShoppingCartModule,
    SharedModule,
    LoginModule,
    FullCalendarModule
  ],
  providers: [
    ActionsService,
    AdminGuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
