import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconCloseComponent } from './components/icon-close/icon-close.component';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';
import { IconSunComponent } from './components/icon-sun/icon-sun.component';
import { IconMoonComponent } from './components/icon-moon/icon-moon.component';

@NgModule({
  declarations: [
    IconNavComponent,
    IconCloseComponent,
    IconSunComponent,
    IconMoonComponent,
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    IconNavComponent,
    IconCloseComponent,
    IconSunComponent,
    IconMoonComponent,
  ],
})
export class IconsModule {}
