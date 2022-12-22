import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { Canal } from 'src/app/core/models/canal';
import { CanauxService } from 'src/app/core/services/canaux.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-page-list-messages',
  templateUrl: './page-list-messages.component.html',
  styleUrls: ['./page-list-messages.component.scss'],
})
export class PageListMessagesComponent {
  public channel$!: Subject<Canal>;
  public currentUser: number;

  constructor(
    private canauxService: CanauxService,
    private usersService: UsersService
  ) {
    this.channel$ = this.canauxService.selectedChannel$;
    this.currentUser = this.usersService.userId;
  }

  // public selectCanal(channelId:number){
  //   this.canauxService.selectChannel(channelId);
  // }
}
