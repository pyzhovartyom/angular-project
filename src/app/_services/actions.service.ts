import { Injectable } from '@angular/core';

@Injectable()
export class ActionsService {

  public isBurgerOpened: boolean = false;
  public isLoginLinkOpened: boolean = false;
  public isHallsSwitched: boolean = false;

  constructor() { }

  public switchBurger(): void {
    this.isBurgerOpened = !this.isBurgerOpened;
    this.isLoginLinkOpened = false
  }

  public switchLoginLinkTumbler(): void {
    this.isLoginLinkOpened = !this.isLoginLinkOpened
  }

  public switchHallsSchemes(): void {
    this.isHallsSwitched = !this.isHallsSwitched
  }
}
