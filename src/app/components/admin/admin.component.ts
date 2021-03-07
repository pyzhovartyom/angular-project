import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  private _localStorageKeys: string[] = [];
  public localStorageData: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this._localStorageKeys = Object.keys(localStorage);
    for (let key of this._localStorageKeys) {
      let value: string | null = localStorage.getItem(key);
      this.localStorageData.push(`${key}: ${value}`)
    }
  }

}
