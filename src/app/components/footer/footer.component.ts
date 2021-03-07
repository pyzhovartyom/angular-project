import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/_services/settings.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    public settingsService: SettingsService
  ) { }

  ngOnInit(): void {
  }

}
