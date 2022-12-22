import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environment/environment';
import { User } from '../models/user';
import { ServersService } from './servers.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private urlApi: string;
  public users$: Observable<User[]>;
  public userId: number;
  public currentUser$: Subject<User>;

  constructor(
    private httpClient: HttpClient,
    private serversService: ServersService
  ) {
    this.urlApi = environment.urlApi;
    this.users$ = this.httpClient.get<User[]>(`${this.urlApi}/users`);
    this.userId = 3;
    this.currentUser$ = new Subject<User>();
  }

  public changeUser(newUser: User) {
    this.currentUser$.next(newUser);
    this.userId = newUser.id;
    this.serversService.userChanged(this.userId);
  }
}
