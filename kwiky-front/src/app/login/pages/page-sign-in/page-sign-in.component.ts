import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-page-sign-in',
  templateUrl: './page-sign-in.component.html',
  styleUrls: ['./page-sign-in.component.scss']
})
export class PageSignInComponent {
  public users$!: Observable<User[]>;

  constructor(private usersService : UsersService){
    this.users$ = this.usersService.users$;
  }
}
