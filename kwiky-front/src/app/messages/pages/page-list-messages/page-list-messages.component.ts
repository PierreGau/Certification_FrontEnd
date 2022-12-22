import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { Canal } from 'src/app/core/models/canal';
import { Message } from 'src/app/core/models/message';
import { User } from 'src/app/core/models/user';
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
  public form!: FormGroup;
  public message: Message = new Message();

  constructor(
    private canauxService: CanauxService,
    private usersService: UsersService,
    private formBuilder: FormBuilder
  ) {
    this.message.user = new User();
    this.channel$ = this.canauxService.selectedChannel$;
    this.currentUser = this.usersService.userId;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      content: [this.message.content],
    });
  }

  public onSubmit(): void {
    this.message = this.form.value;
    this.message.user = new User();
    this.message.user.id = this.currentUser;
    console.log(this.message.user.id);
    this.canauxService.postMessage(this.message);
  }
}
