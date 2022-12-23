import { Component } from '@angular/core';
import { faMoon, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-moon',
  templateUrl: './icon-moon.component.html',
  styleUrls: ['./icon-moon.component.scss']
})
export class IconMoonComponent {
  public myIcon: IconDefinition;
  constructor() {
    this.myIcon = faMoon;
  }
}

