import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private urlApi: string;
  public users$: Observable<User[]>;
  public userId: number;
  public currentUser$: Observable<User>;

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.urlApi;
    this.users$ = this.httpClient.get<User[]>(`${this.urlApi}/users`);
    this.userId = 3;
    this.currentUser$ = this.httpClient.get<User>(
      `${this.urlApi}/user/${this.userId}`
    );
  }

  public changeUser(newUser: number) {
    this.userId = newUser;
  }
}
