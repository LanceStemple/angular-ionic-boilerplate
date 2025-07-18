import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component'; // standalone component
import { SharedModule } from './../shared.module';

@NgModule({
  imports: [
    SharedModule,
    HomeComponent, // <-- import the standalone component here
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
  ],
})
export class HomeModule {}
