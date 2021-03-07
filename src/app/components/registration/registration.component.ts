import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Gender } from 'src/app/_models/gender';
import { NewUserInfo } from 'src/app/_models/new-user-info';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public genders: Gender[] = [
    { id: '1', text: 'Mr.' },
    { id: '2', text: 'Mrs.' },
  ]
  public userName: string = '';
  public userSurname: string = '';
  public userEmail: string = '';
  public userPassword: string = '';
  public userPasswordConfirm: string = '';
  public userPhone: string = '';
  public isTermsChecked: boolean = false;
  public isPasswordHidden: boolean = true;
  public isPasswordConfirmHidden: boolean = true;
  public isRegistrationOpened: boolean = true;
  public isRegistrationSuccess: boolean = false;
  public isRegistrationFailed: boolean = false;

  constructor(
    private _dataService: DataService
  ) { }

  ngOnInit(): void {

  }

  registerUser(): void {
    let userGender: HTMLSelectElement | null = document.querySelector('.registration__input');

    let newUser: NewUserInfo = {
      gender: Number(userGender?.value),
      firstName: this.userName,
      lastName: this.userSurname,
      email: this.userEmail,
      password: this.userPassword,
      phoneNumber: this.userPhone
    }

    this.isRegistrationOpened = false;

    this._dataService.registerNewUser(newUser)
      .subscribe(
        (data: any): void => {
        if (data === null) {
          this.isRegistrationSuccess = true;
        }
      },
      (error: HttpErrorResponse): void => {
        this.isRegistrationFailed = true;
      }
    )
  }

  checkTerms(): void {
    this.isTermsChecked = !this.isTermsChecked;
  }

  showPassword(): void {
    this.isPasswordHidden = !this.isPasswordHidden;
  }

  showPasswordConfirm(): void {
    this.isPasswordConfirmHidden = !this.isPasswordConfirmHidden;
  }

  returnToRegistration(): void {
    this.isRegistrationFailed = false;
    this.isTermsChecked = false;
    this.isRegistrationOpened = true;
  }

}
