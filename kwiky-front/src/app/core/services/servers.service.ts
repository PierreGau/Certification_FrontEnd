import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Server } from '../models/server';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class ServersService {
  private urlApi: string;
  public myServers$: Observable<Server[]>;
  public servers$: Observable<Server[]>;
  public selectedServer: Subject<Server>;
  constructor(
    private httpClient: HttpClient,
    private usersService: UsersService
  ) {
    this.urlApi = environment.urlApi;
    this.myServers$ = this.httpClient.get<Server[]>(
      `${this.urlApi}/servers/user/${this.usersService.userId}`
    );
    this.servers$ = this.httpClient.get<Server[]>(`${this.urlApi}/servers`);
    this.selectedServer = new Subject<Server>();
  }

  public selectServer(server: Server): void {
    this.selectedServer.next(server);
  }
}
