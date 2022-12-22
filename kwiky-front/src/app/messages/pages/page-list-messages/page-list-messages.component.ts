import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { Canal } from 'src/app/core/models/canal';
import { CanauxService } from 'src/app/core/services/canaux.service';

@Component({
  selector: 'app-page-list-messages',
  templateUrl: './page-list-messages.component.html',
  styleUrls: ['./page-list-messages.component.scss'],
})
export class PageListMessagesComponent {
  public channel$!: Subject<Canal>;

  constructor(private canauxService: CanauxService) {
    this.channel$ = this.canauxService.selectedChannel$;
  }

  // public selectCanal(channelId:number){
  //   this.canauxService.selectChannel(channelId);
  // }
}
