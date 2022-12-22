import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  public form!: FormGroup;

  constructor(
    private canauxService: CanauxService,
    private usersService: UsersService,
    private formBuilder: FormBuilder
  ) {
    this.channel$ = this.canauxService.selectedChannel$;
    this.currentUser = this.usersService.userId;
  }

  public onSubmit(): void {
    console.log(this.form.value.content);
  }
}
