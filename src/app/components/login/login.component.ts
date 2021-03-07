import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserLoginData } from 'src/app/_models/user-login-data';
import { DataService } from 'src/app/_services/data.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userEmail: string = '';
  public userPassword: string = '';
  private _fromLocalStorage: string | null = '';

  constructor(
    private _dataService: DataService,
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this._fromLocalStorage = localStorage.getItem('user');
    if (this._fromLocalStorage !== null) {
      this.userService.isLoginOpened = false;
      this.userService.isLoading = true;
      this.userService.userLogin = this._fromLocalStorage;
      this.userService.isUserLogin = true;
      this.userService.isLoading = false;
    }
  }

  public loginUser(): void {
    let userData: UserLoginData = {
      email: this.userEmail,
      password: this.userPassword
    }

    this.userService.isLoginOpened = false;
    this.userService.isLoading = true;

    this._dataService.loginUser(userData)
    .subscribe(
      (data: any) => {
        if (data) {
          this.userService.userLogin = this.userEmail;
          localStorage.setItem('user', this.userEmail);
          this.userService.isUserLogin = true;
          this.userService.isLoading = false;
        }
      },
      (error: HttpErrorResponse) => {
        this.userService.isUserFailed = true;
        this.userService.isLoading = false;
      }
    )
  }

  public clearEmail(): void {
     this.userEmail = '';
  }

  public clearPassword(): void {
     this.userPassword = '';
  }

  public returnToLogin(): void {
    this.userService.isUserFailed = false;
    this.userService.isLoginOpened = true;
  }

}
