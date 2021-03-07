import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  public isUserLogin: boolean = false;
  public isUserFailed: boolean = false;
  public isLoginOpened: boolean = true;
  public isLoading: boolean = false;
  public userLogin: string = '';

  constructor() { }

  public logout(): void {
    this.isUserLogin = false;
    this.userLogin = '';
    localStorage.removeItem('user');
    this.isLoginOpened = true;
  }
}
