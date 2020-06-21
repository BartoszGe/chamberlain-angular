import {Component, EventEmitter, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LoginDialogComponent} from './login-dialog/login-dialog.component';
import {User} from '../model/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public isLogged = false;

  @Output() pageSelected = new EventEmitter<string>();
  @Output() user = new EventEmitter<User>();

  constructor(private dialog: MatDialog) {
  }

  moveTo(page: string) {
    this.pageSelected.emit(page);

  }

  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginDialogComponent, {data: {isLogged: this.isLogged}});
    dialogRef.afterClosed().subscribe(() => {
      if (this.isLogged !== dialogRef.componentInstance.isLogged) {
        this.isLogged = dialogRef.componentInstance.isLogged;
        if (dialogRef.componentInstance.user) {
          this.user.emit(dialogRef.componentInstance.user);
        }
        console.log('isLogged:' + this.isLogged);
      }
    });
  }
}
