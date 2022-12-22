import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Canal } from '../models/canal';
import { Message } from '../models/message';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class CanauxService {
  private urlApi: string;
  public myChannels$: Observable<Canal[]>;
  public channels$: Observable<Canal[]>;
  public selectedChannel$: Subject<Canal>;
  public listMessages$: Observable<Message[]>;

  constructor(
    private httpClient: HttpClient,
    private usersService: UsersService
  ) {
    this.urlApi = environment.urlApi;
    this.myChannels$ = this.httpClient.get<Canal[]>(
      `${this.urlApi}/servers/canaux/${this.usersService.userId}`
    );
    this.channels$ = this.httpClient.get<Canal[]>(`${this.urlApi}/canaux`);
    this.selectedChannel$ = new Subject<Canal>();

    this.listMessages$ = this.httpClient.get<Message[]>(
      `${this.urlApi}/messages/`
    );
  }

  public selectChannel(canal: Canal): void {
    this.httpClient
      .get<Canal>(`${this.urlApi}/canaux/${canal.id}`)
      .subscribe((data) => this.selectedChannel$.next(data));
  }
}
