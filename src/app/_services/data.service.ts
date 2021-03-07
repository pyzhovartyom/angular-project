import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { EventItem } from "../_models/event";
import { PricesInfo } from "../_models/prices-info";
import { map } from 'rxjs/operators';
import { HallData } from '../_models/hall-data';
import { LoadingDates } from '../_models/loading-dates';
import { NewUserInfo } from '../_models/new-user-info';
import { UserLoginData } from '../_models/user-login-data';

@Injectable()
export class DataService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  public upcomingEventList$: Observable<EventItem[]> = this.loadEventsList(0, 3);

  public loadEventsList(
    currentPage: number,
    eventsOnPage: number,
    loadingDates: LoadingDates = {
      "dateFrom": 1564952400000,
      "dateTo": 1618866000000
    }): Observable<EventItem[]> {
    return this._httpClient.post<EventItem[]>(
      `https://ticketserviceapp.herokuapp.com/events/bydate/${currentPage}/${eventsOnPage}`,
      loadingDates
      )
      .pipe(
      map((json: any) => {
        return (json || [])
        .map(EventItem.fromJSON);
      })
    )
  }

  public loadEventById(id: string): Observable<EventItem> {
    return this._httpClient.get<EventItem>(`https://ticketserviceapp.herokuapp.com/event/${id}`)
      .pipe(
        map((json: any) => {
          return Boolean(json) ? EventItem.fromJSON(json) : json
      })
    )
  }

  public loadEventPricesById(id: string): Observable<PricesInfo> {
    return this._httpClient.get<PricesInfo>(`https://ticketserviceapp.herokuapp.com/events/rest/${id}`)
      .pipe(
        map((json: any) => {
          return Boolean(json) ? PricesInfo.fromJSON(json) : json
      })
    )
  }

  public loadHallData(id: string): Observable<HallData> {
    return this._httpClient.get<HallData>(`https://ticketserviceapp.herokuapp.com/event/${id}/false`)
      .pipe(
        map((json: any) => {
          return Boolean(json) ? HallData.fromJSON(json) : json
      })
    )
  }

  public registerNewUser(NewUserInfo: NewUserInfo) {
    return this._httpClient.post<NewUserInfo>('https://ticketserviceapp.herokuapp.com/user', NewUserInfo)
  }

  public loginUser(userLoginData: UserLoginData) {
    return this._httpClient.post<UserLoginData>('https://ticketserviceapp.herokuapp.com/login', userLoginData)
  }

}
