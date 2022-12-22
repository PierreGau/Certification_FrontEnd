import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Server } from '../models/server';

@Injectable({
  providedIn: 'root',
})
export class ServersService {
  private urlApi: string;
  public myServers$: Subject<Server[]>;
  public servers$: Observable<Server[]>;
  public selectedServer$: Subject<Server>;

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.urlApi;
    //this.myServers$ = this.httpClient.get<Server[]>(
    //  `${this.urlApi}/servers/user/1`
    //);
    this.myServers$ = new Subject<Server[]>();
    this.servers$ = this.httpClient.get<Server[]>(`${this.urlApi}/servers`);
    this.selectedServer$ = new Subject<Server>();
  }

  public selectServer(server: Server): void {
    this.selectedServer$.next(server);
    console.log(Server.name);
  }

  public userChanged(userId: number) {
    this.httpClient.get<Server[]>(`${this.urlApi}/servers/user/${userId}`).subscribe((data) => this.myServers$.next(data));
  }
}
