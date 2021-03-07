import { Injectable } from '@angular/core';
import { HallInfo } from '../_models/hall-info'

@Injectable()
export class SettingsService {

  public hallInfo: HallInfo = {
    name: "Berlin City Hall",
    subname: "Events and Tickets",
    address: "Freudstasse 69, 10117 Berlin",
    phone: "Tel.: 030 2223344",
    fax: "Fax.: 030 2223355",
    email: "Email: info@bch.de"
  }

  public fullName: string = `${this.hallInfo.name} | ${this.hallInfo.subname}`

  constructor() { }

}
