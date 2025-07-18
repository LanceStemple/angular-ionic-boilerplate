import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component'; // standalone component
import { SharedModule } from './../shared.module';

@NgModule({
  imports: [
    SharedModule,
    SettingsComponent, // <-- import the standalone component here
    RouterModule.forChild([
      {
        path: '',
        component: SettingsComponent,
      },
    ]),
  ],
})
export class SettingsModule {}
