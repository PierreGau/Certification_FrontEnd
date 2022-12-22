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
  public activePanelId!: string;

  servers: any[] = [];
  openState: { [key: string]: boolean } = {};

  constructor(private serversService: ServersService) {
    this.servers$ = serversService.myServers$;
    serversService.selectedServer$.subscribe(
      (data) => (this.currentServer = data)
    );
  }

  ngOnInit() {
    this.serversService.myServers$.subscribe((servers: any[]) => {
      this.servers = servers;
      this.openState = {};
      for (const server of servers) {
        this.openState[server.name] = false;
      }
    });
  }

  toggleOpen(server: any) {
    this.openState[server.name] = !this.openState[server.name];
    console.log('oui');
  }

  public selectServer(server: Server): void {
    this.serversService.selectServer(server);
  }

  openPanel(panelId: string) {
    this.activePanelId = panelId;
  }
}
