import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/_services/settings.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    public settingsService: SettingsService
  ) { }

  ngOnInit(): void {
  }

}
