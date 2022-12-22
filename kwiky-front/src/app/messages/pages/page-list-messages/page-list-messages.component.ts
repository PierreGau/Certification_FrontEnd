import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Canal } from 'src/app/core/models/canal';
import { Message } from 'src/app/core/models/message';
import { CanauxService } from 'src/app/core/services/canaux.service';

@Component({
  selector: 'app-page-list-messages',
  templateUrl: './page-list-messages.component.html',
  styleUrls: ['./page-list-messages.component.scss']
})
export class PageListMessagesComponent {
  public channels$!: Observable<Canal[]>;
  public listMessages$!: Observable<Message[]>

  constructor(private canauxService : CanauxService){
    this.channels$ = this.canauxService.channels$;
    this.listMessages$ = this.canauxService.listMessages$;
  }

  // public selectCanal(channelId:number){
  //   this.canauxService.selectChannel(channelId);
  // }
}
