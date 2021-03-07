import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ShoppingCartComponent } from './shopping-cart.component';
import { SharedModule } from '../../shared.module';
import { ShoppingCartEmptyComponent } from '../shopping-cart-empty/shopping-cart-empty.component';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { TicketsService } from 'src/app/_services/tickets.service';


@NgModule({
  declarations: [
    ShoppingCartComponent,
    ShoppingCartEmptyComponent,
  ],
  exports: [
    ShoppingCartComponent,
    ShoppingCartEmptyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    ShoppingCartRoutingModule
  ],
  providers: [
    TicketsService
  ],
})
export class ShoppingCartModule { }
