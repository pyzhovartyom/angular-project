import { Component } from '@angular/core';
import { ActionsService } from './_services/actions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-project';


  constructor (
    public actionsService: ActionsService,
  ) { }
}
