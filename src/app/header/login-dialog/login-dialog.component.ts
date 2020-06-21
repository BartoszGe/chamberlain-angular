import {Component, EventEmitter, Inject, Output} from '@angular/core';
import {LoginService} from '../../service/login.service';
import {User} from '../../model/user.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface DialogData {
  isLogged: boolean;
}

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent {

  public user: User;
  public isLogged = false;

  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private loginService: LoginService) {
    this.isLogged = this.data.isLogged;
  }

  loginUser(login: string) {
    this.loginService.get(login).subscribe(response => {
      if (response) {
        console.log('Hi ' + response.name);
        this.user = response;
        this.isLogged = true;
        this.dialogRef.close();
      }
    });
  }

  logoutUser() {
    this.isLogged = false;
    window.location.reload();
    this.dialogRef.close();
  }
}
