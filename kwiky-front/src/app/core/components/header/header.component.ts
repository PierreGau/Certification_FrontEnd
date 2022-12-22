import { Component } from '@angular/core';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public user!: User;

  constructor(private usersService: UsersService){
    this.usersService.currentUser$.subscribe((data) => (this.user = data))
  }
}
