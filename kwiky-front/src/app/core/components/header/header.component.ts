import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public user$!: Observable<User>;

  constructor(private usersService: UsersService) {
    this.user$ = this.usersService.currentUser$;
  }
}
