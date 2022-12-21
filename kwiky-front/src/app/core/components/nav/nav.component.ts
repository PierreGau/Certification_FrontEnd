import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Server } from '../../models/server';
import { ServersService } from '../../services/servers.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  public servers$: Observable<Server[]>;
  public currentServer!: Server;
  constructor(private serversService: ServersService) {
    this.servers$ = serversService.myServers$;
    serversService.selectedServer.subscribe(
      (data) => (this.currentServer = data)
    );
  }

  public selectServer(server: Server): void {
    this.serversService.selectServer(server);
  }
}
