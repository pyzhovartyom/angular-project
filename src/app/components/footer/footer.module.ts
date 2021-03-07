import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { FooterComponent } from './footer.component';
import { SharedModule } from '../../shared.module';
import { SettingsService } from 'src/app/_services/settings.service';

@NgModule({
  declarations: [
    FooterComponent,
  ],
  exports: [
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    SettingsService
  ],
})
export class FooterModule { }
