import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-page-sign-in',
  templateUrl: './page-sign-in.component.html',
  styleUrls: ['./page-sign-in.component.scss'],
})
export class PageSignInComponent {
  public users$!: Observable<User[]>;
  private selectedUser!: number;
  @ViewChild('select') select!: ElementRef;

  constructor(private usersService: UsersService) {
    this.users$ = this.usersService.users$;
  }

  selectChange() {
    this.selectedUser = this.select.nativeElement.value;
    this.usersService.users$.subscribe((data) => {
      data.forEach((value) => {
        if (value.id == this.selectedUser) {
          this.usersService.changeUser(value);
          console.log(value.name);
        }
      });
    });
  }
}
