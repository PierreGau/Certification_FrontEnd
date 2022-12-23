import { Component } from '@angular/core';
import { faSun, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-sun',
  templateUrl: './icon-sun.component.html',
  styleUrls: ['./icon-sun.component.scss']
})
export class IconSunComponent {
  public myIcon: IconDefinition;
  constructor() {
    this.myIcon = faSun;
  }
}

